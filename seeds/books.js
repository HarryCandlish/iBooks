exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          id: 1,
          user_id: 1,
          title: "Tropic of Cancer",
          author: "Henry Miller",
          description: "First person, protagonist walking around Paris",
          genre: "Autobiographical Fiction",
          year_written: "1939",
          pages: 250,
          read: true,
          image: ""
        },
        {
          id: 2,
          user_id: 1,
          title: "Demons",
          author: "Fyodor Dostoevsky",
          description: "Demons",
          genre: "Philosophical, Thriller",
          year_written: "1871",
          pages: 700,
          read: true,
          image: ""
        },
        {
          id: 3,
          user_id: 1,
          title: "The Man Without Qualities",
          author: "Robert Musil",
          description: "First person, protagonist walking around Vienna",
          genre: "Philosophical Fiction",
          year_written: "1920",
          pages: 700,
          read: false,
          want_to_read: true,
          image: ""
        },
        {
          id: 4,
          user_id: 1,
          title: "Being and Nothingness",
          author: "Sean-Paul Sartre",
          description: "The nature of being, the nature of nothingness",
          genre: "Philosophical",
          year_written: "1964",
          pages: 750,
          read: false,
          reading: true,
          image: ""
        },
        {
          id: 5,
          user_id: 1,
          title: "Journey to the End of the Night",
          author: "Louis-Ferdinand Celine",
          description: "First person, protagonist walking around Paris",
          genre: "Autobiographical Fiction",
          year_written: "1929",
          pages: 450,
          read: true,
          image: ""
        },
        {
          id: 6,
          user_id: 1,
          title: "Ham and Rye",
          author: "Charles Bukowski",
          description: "First person, protagonist walking around LA",
          genre: "Fiction",
          year_written: "1975",
          pages: 250,
          read: false,
          want_to_read: true,
          image: ""
        }
      ]);
    });
};
