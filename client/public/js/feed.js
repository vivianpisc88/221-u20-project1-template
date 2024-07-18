document.addEventListener('DOMContentLoaded', function() {
    function Story(title, body, linkUrl, imageUrl) {
        this.Title = title;
        this.Body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

    function initializePage() {
        addEventListeners();
        removeNewsfeed();
        makeNews();
    }

    function addEventListeners() {
        let portalButton = document.getElementById('portal_button');
        if (portalButton) {
            portalButton.addEventListener('click', goToMaristPortal);
        }

        let portalButtonText = document.getElementById('portal_button_text');
        if (portalButtonText) {
            portalButtonText.addEventListener('click', goToMaristPortal);
        }
    }

    function removeNewsfeed() {
        let newsfeedElement = document.getElementById('newsfeed');
        if (newsfeedElement) {
            newsfeedElement.innerHTML = 'Inside your MyMarist...';
        }
    }

    function makeNews() {
        let currentNews = [
            new Story('Welcome to Marist!', 'We are looking forward to students enjoying the buildings and activities', 'https://www.marist.edu/', 'images/campus.png'),
            new Story('News', 'All students need to be sure of news and information posted.', 'https://www.marist.edu/', 'images/news_pic.jpg'),
            new Story('A great exprience', 'Activies and clubs are agreat way to make friends and connections', 'https://www.marist.edu/', 'images/hancock.jpeg')
        ];

        currentNews.forEach(function(item) {
            displayItem(item);
        });
    }

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        if (newsfeedElement) {
            let itemHTML = `
                <div class="feed-item">
                    <h2 class="small-title"><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                    <p>${feedItem.Body}</p>
                    <a href="${feedItem.linkUrl}" target="_blank">
                        <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 9%; height: 9;">
                    </a>
                    <hr>
                </div>
            `;
            
            newsfeedElement.innerHTML += itemHTML;
        }
    }

    function goToMaristPortal() {
        goToLocation('http://my.marist.edu');
    }

    function goToLocation(url) {
        window.location.href = url;
    }

    initializePage();
});
