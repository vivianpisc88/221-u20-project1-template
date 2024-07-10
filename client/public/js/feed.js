document.addEventListener('DOMContentLoaded', function() {
    function goToMaristPortal() {
        goToLocation('http://my.marist.edu');
    }

    // Check if the elements exist before adding event listeners
    let portalButton = document.getElementById('portal_button');
    if (portalButton) {
        portalButton.addEventListener('click', goToMaristPortal);
    }

    let portalButtonText = document.getElementById('portal_button_text');
    if (portalButtonText) {
        portalButtonText.addEventListener('click', goToMaristPortal);
    }

    let currentStories = [];
    
    currentStories.push({
        Title: 'Marist Story 1',
        Body: 'Body 1',
        linkUrl: 'https://example.com/story1',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'Body 2',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'Body 3',
        linkUrl: 'https://example.com/story3',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
                </a>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;3
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });
});