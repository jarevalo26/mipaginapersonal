// ===============================================
// SISTEMA DE BÚSQUEDA INTELIGENTE
// ===============================================

class SearchEngine {
  constructor() {
    this.searchIndex = null;
    this.currentLang = localStorage.getItem('language') || 'es';
    this.searchInput = null;
    this.searchResults = null;
    this.selectedIndex = -1;
    this.init();
  }

  async init() {
    // Cargar índice de búsqueda
    await this.loadSearchIndex();
    
    // Referencias DOM
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchContainer = document.getElementById('search-container');
    
    if (!this.searchInput) return;
    
    // Event listeners
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    this.searchInput.addEventListener('focus', () => this.searchContainer.classList.add('active'));
    this.searchInput.addEventListener('keydown', (e) => this.handleKeyboard(e));
    
    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!this.searchContainer.contains(e.target)) {
        this.closeResults();
      }
    });
    
    // Atajo Ctrl+K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.searchInput.focus();
      }
    });
    
    // Actualizar idioma cuando cambie
    window.addEventListener('languageChanged', (e) => {
      this.currentLang = e.detail.lang;
      this.updatePlaceholder();
    });
  }

  async loadSearchIndex() {
    try {
      const response = await fetch('js/search-index.json');
      this.searchIndex = await response.json();
    } catch (error) {
      console.error('Error loading search index:', error);
    }
  }

  updatePlaceholder() {
    if (!this.searchInput) return;
    const placeholders = {
      es: 'Buscar experiencia, skills, proyectos... (Ctrl+K)',
      en: 'Search experience, skills, projects... (Ctrl+K)'
    };
    this.searchInput.placeholder = placeholders[this.currentLang];
  }

  handleSearch(query) {
    if (!query || query.trim().length < 2) {
      this.closeResults();
      return;
    }

    const results = this.search(query.trim());
    this.displayResults(results, query);
  }

  search(query) {
    if (!this.searchIndex || !this.searchIndex[this.currentLang]) return [];

    const items = this.searchIndex[this.currentLang];
    const queryLower = this.normalizeText(query);
    const queryWords = queryLower.split(' ');

    // Buscar coincidencias
    const results = items.map(item => {
      let score = 0;
      const titleNorm = this.normalizeText(item.title);
      const contentNorm = this.normalizeText(item.content);
      const keywordsNorm = item.keywords.map(k => this.normalizeText(k));

      // Coincidencia exacta en título (peso alto)
      if (titleNorm.includes(queryLower)) {
        score += 100;
      }

      // Coincidencia en keywords (peso medio-alto)
      keywordsNorm.forEach(keyword => {
        if (keyword.includes(queryLower)) {
          score += 50;
        }
      });

      // Coincidencia en contenido (peso medio)
      if (contentNorm.includes(queryLower)) {
        score += 30;
      }

      // Coincidencias por palabra individual (peso bajo)
      queryWords.forEach(word => {
        if (word.length >= 3) {
          if (titleNorm.includes(word)) score += 20;
          if (contentNorm.includes(word)) score += 10;
          keywordsNorm.forEach(keyword => {
            if (keyword.includes(word)) score += 15;
          });
        }
      });

      return { ...item, score };
    });

    // Filtrar y ordenar por relevancia
    return results
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Máximo 8 resultados
  }

  normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Eliminar acentos
  }

  displayResults(results, query) {
    if (!this.searchResults) return;

    if (results.length === 0) {
      const noResults = this.currentLang === 'es' 
        ? `No se encontraron resultados para "${query}"`
        : `No results found for "${query}"`;
      
      this.searchResults.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search"></i>
          <p>${noResults}</p>
        </div>
      `;
      this.searchResults.classList.add('show');
      return;
    }

    const resultsHTML = results.map((result, index) => `
      <a href="${result.url}" 
         class="search-result-item ${index === this.selectedIndex ? 'selected' : ''}" 
         data-index="${index}">
        <div class="result-icon">
          ${this.getCategoryIcon(result.category)}
        </div>
        <div class="result-content">
          <div class="result-title">${this.highlightText(result.title, query)}</div>
          <div class="result-category">${result.category}</div>
          <div class="result-preview">${this.getPreview(result.content, query)}</div>
        </div>
        <div class="result-arrow">
          <i class="fas fa-arrow-right"></i>
        </div>
      </a>
    `).join('');

    this.searchResults.innerHTML = resultsHTML;
    this.searchResults.classList.add('show');
    
    // Event listeners para los resultados
    this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        this.selectedIndex = parseInt(item.dataset.index);
        this.updateSelection();
      });
    });
  }

  getCategoryIcon(category) {
    const icons = {
      'Página': '<i class="fas fa-file-alt"></i>',
      'Page': '<i class="fas fa-file-alt"></i>',
      'Perfil': '<i class="fas fa-user"></i>',
      'Profile': '<i class="fas fa-user"></i>',
      'Experiencia': '<i class="fas fa-briefcase"></i>',
      'Experience': '<i class="fas fa-briefcase"></i>',
      'Habilidades': '<i class="fas fa-code"></i>',
      'Skills': '<i class="fas fa-code"></i>',
      'Educación': '<i class="fas fa-graduation-cap"></i>',
      'Education': '<i class="fas fa-graduation-cap"></i>',
      'Proyecto': '<i class="fas fa-folder-open"></i>',
      'Project': '<i class="fas fa-folder-open"></i>',
      'Intereses': '<i class="fas fa-heart"></i>',
      'Interests': '<i class="fas fa-heart"></i>'
    };
    return icons[category] || '<i class="fas fa-file"></i>';
  }

  highlightText(text, query) {
    const queryLower = this.normalizeText(query);
    const textNorm = this.normalizeText(text);
    
    if (!textNorm.includes(queryLower)) return text;

    // Buscar posición de la coincidencia
    const index = textNorm.indexOf(queryLower);
    if (index === -1) return text;

    const before = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const after = text.substring(index + query.length);

    return `${before}<mark>${match}</mark>${after}`;
  }

  getPreview(content, query) {
    const queryLower = this.normalizeText(query);
    const contentNorm = this.normalizeText(content);
    const index = contentNorm.indexOf(queryLower);

    if (index === -1) {
      return content.substring(0, 80) + '...';
    }

    // Mostrar contexto alrededor de la coincidencia
    const start = Math.max(0, index - 30);
    const end = Math.min(content.length, index + query.length + 50);
    
    let preview = content.substring(start, end);
    if (start > 0) preview = '...' + preview;
    if (end < content.length) preview = preview + '...';

    return this.highlightText(preview, query);
  }

  handleKeyboard(e) {
    if (!this.searchResults.classList.contains('show')) return;

    const items = this.searchResults.querySelectorAll('.search-result-item');
    
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
        this.updateSelection();
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.updateSelection();
        break;
        
      case 'Enter':
        e.preventDefault();
        if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
          items[this.selectedIndex].click();
        }
        break;
        
      case 'Escape':
        this.closeResults();
        this.searchInput.blur();
        break;
    }
  }

  updateSelection() {
    const items = this.searchResults.querySelectorAll('.search-result-item');
    items.forEach((item, index) => {
      if (index === this.selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  closeResults() {
    if (this.searchResults) {
      this.searchResults.classList.remove('show');
    }
    if (this.searchContainer) {
      this.searchContainer.classList.remove('active');
    }
    this.selectedIndex = -1;
  }
}

// Inicializar búsqueda cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.searchEngine = new SearchEngine();
});
