describe('Navigation', () => {
  let TrackTestInLikes;

  beforeEach(() => {
    // Visit the page once before all tests
    cy.visit('http://localhost:3000/');
    cy.wait(400);
  });

  describe('Check Home Page', () => {
    it('should display the home page correctly', () => {
      cy.get('[data-cy="artistSection"]').should('exist');
      cy.get('[data-cy="trackSection"]').should('exist');
      cy.get('[data-cy="trackList"]')
        .find('[data-cy="trackListItem"]')
        .should('have.length', 4);
      cy.get('[data-cy="artistList"]')
        .find('[data-cy="artistListItem"]')
        .should('have.length', 4);
      cy.get('[data-cy="likeButton"]').should('exist');
    });
  });

  describe('Like Button Functionality', () => {
    it('should change HeartIcon to FilledHeartIcon', () => {
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconHeartIcon"]'
      ).should('exist');
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"]'
      ).click();
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconFilledHeartIcon"]'
      ).should('exist');
    });

    it('should change FilledHeartIcon to HeartIcon', () => {
      // Ensure the like button is in the filled state first
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"]'
      ).click();

      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconFilledHeartIcon"]'
      ).should('exist');
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"]'
      ).click();
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconHeartIcon"]'
      ).should('exist');
    });
  });

  describe('Playlist', () => {
    it('should add track to "Likes" playlist', () => {
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"]'
      ).click();
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .flex-col > .max-w-40 > [data-cy="trackName"]'
      ).then(($el) => {
        TrackTestInLikes = $el.text();
      });
      cy.get(':nth-child(2) > [data-cy="playlistListItem"]')
        .contains('Likes')
        .click();
      cy.get('[data-cy="PlaylistTrackList"] > .group').should('have.length', 1);
      cy.get(
        ':nth-child(1) > [data-cy="PlaylistTrackListItem"] > .h-14 > div > [data-cy="PlaylistTrackListItemName"]'
      ).then(($el) => {
        expect($el.text()).to.contain(TrackTestInLikes);
      });
      cy.get(':nth-child(1) > [data-cy="navigationListItem"]').click();
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconFilledHeartIcon"]'
      ).should('exist');
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"]'
      ).click();
      cy.get(
        ':nth-child(2) > [data-cy="trackListItem"] > .justify-between > [data-cy="likeButton"] > [data-cy="iconHeartIcon"]'
      ).should('exist');
      cy.get(':nth-child(2) > [data-cy="playlistListItem"]')
        .contains('Likes')
        .click();
      cy.get(
        ':nth-child(1) > [data-cy="PlaylistTrackListItem"] > .h-14 > div > [data-cy="PlaylistTrackListItemName"]'
      ).should('not.exist');
    });

    it('should create a new playlist', () => {
      cy.get('[data-cy="createPlaylistButton"] > :nth-child(2)').click();
      cy.get('[data-cy="playlistNameField"]').type('Test Playlist');
      cy.get('[data-cy="createButton"]').click();
      cy.get('[data-cy="playlistList"]').should(
        'contain.text',
        'Test Playlist'
      );
    });
  });
});
