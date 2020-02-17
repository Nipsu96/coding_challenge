exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('highscore').del()
      .then(function () {
        // Inserts seed entries
        return knex('highscore').insert([
            {
             username:"Beruna",
             score: 66699
              },
              {
                username:"LaatuBeruna",
             score: 6969
              },
              {
                username:"Badaatti",
                score: 10
              },
              {
                username:"BarembiBadaatti",
                score: 11
              },
              {
                username:"BarasBadaatti",
                score: 13
              },
              {
                username:"Borkana",
                score: 9
              },
              {
                username:"Muuzi",
                score: 69
              }
           
        ]);
      });
  };
  