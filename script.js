document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchResults = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value;
            if (query.length > 2) {
                showSuggestions(query);
            } else {
                searchSuggestions.style.display = 'none';
                searchResults.innerHTML = '';
            }
        });
    }

    function showSuggestions(query) {

        const suggestions = [
            { title: 'Movie 1', url: 'details.html' },
            { title: 'Show 2', url: 'details.html' },
            { title: 'Movie 3', url: 'details.html' }
        ];

        let suggestionHTML = '';
        suggestions.forEach(item => {
            suggestionHTML += `<div data-url="${item.url}">${item.title}</div>`;
        });
        searchSuggestions.innerHTML = suggestionHTML;
        searchSuggestions.style.display = 'block';

        // Add click event listener to suggestion items
        Array.from(searchSuggestions.children).forEach(item => {
            item.addEventListener('click', function() {
                window.location.href = this.dataset.url; 
            });
        });
    }

});