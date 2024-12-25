// Episodes Data with Links
const episodes = {
  S01: [
    { title: "Winter Is Coming", link: "http://google.com" },
    { title: "The Kingsroad", link: "http://got-s01-e02" },
    { title: "Lord Snow", link: "http://got-s01-e03" },
    { title: "Cripples, Bastards, and Broken Things", link: "http://got-s01-e04" },
    { title: "The Wolf and the Lion", link: "http://got-s01-e05" },
    { title: "A Golden Crown", link: "http://got-s01-e06" },
    { title: "You Win or You Die", link: "http://got-s01-e07" },
    { title: "The Pointy End", link: "http://got-s01-e08" },
    { title: "Baelor", link: "http://got-s01-e09" },
    { title: "Fire and Blood", link: "http://got-s01-e10" }
  ],
  S02: [
    { title: "The North Remembers", link: "http://got-s02-e01" },
    { title: "The Night Lands", link: "http://got-s02-e02" },
    { title: "What Is Dead May Never Die", link: "http://got-s02-e03" },
    { title: "Garden of Bones", link: "http://got-s02-e04" },
    { title: "The Ghost of Harrenhal", link: "http://got-s02-e05" },
    { title: "The Old Gods and the New", link: "http://got-s02-e06" },
    { title: "A Man Without Honor", link: "http://got-s02-e07" },
    { title: "The Prince of Winterfell", link: "http://got-s02-e08" },
    { title: "Blackwater", link: "http://got-s02-e09" },
    { title: "Valar Morghulis", link: "http://got-s02-e10" }
  ],
  S03: [
    { title: "Valar Dohaeris", link: "http://got-s03-e01" },
    { title: "Dark Wings, Dark Words", link: "http://got-s03-e02" },
    { title: "Walk of Punishment", link: "http://got-s03-e03" },
    { title: "And Now His Watch Is Ended", link: "http://got-s03-e04" },
    { title: "Kissed by Fire", link: "http://got-s03-e05" },
    { title: "The Climb", link: "http://got-s03-e06" },
    { title: "The Bear and the Maiden Fair", link: "http://got-s03-e07" },
    { title: "Second Sons", link: "http://got-s03-e08" },
    { title: "The Rains of Castamere", link: "http://got-s03-e09" },
    { title: "Mhysa", link: "http://got-s03-e10" }
  ],
  S04: [
    { title: "Two Swords", link: "vlc://https://prod-940b1d9bbad9901.wdckeystone.com/9e7f3dc5-7a69-44a2-9672-b444b60548a0/sdk/v3/files/mksoaae4wh3rwd53mbliy2hv/content?access_token=eyJraWQiOiJNOHNrM1VSdnZHMnhKZ3FkZDdYdGhWZnhyQVptdmVvMyIsImFsZyI6IlJTMjU2In0.eyJqdGkiOiJKV1QiLCJhdWQiOiJrZXlzdG9uZSIsImlzcyI6Im0ybS10b2tlbi1zZXJ2aWNlIiwic3ViIjoicHVibGljX3NoYXJlIiwic2NvcGVzIjoibmFzX3JlYWRfb25seSBuYXNfcmVhZF93cml0ZSIsImN1c3RvbUNsYWltcyI6eyJkZXZpY2VJZCI6IjllN2YzZGM1LTdhNjktNDRhMi05NjcyLWI0NDRiNjA1NDhhMCIsImF1dGhfaWQiOiJiNjI1MzQ1ZS1kMjE2LTRlYTUtYTQ3YS1hY2U3MTliNGM3NTcifSwiZXhwIjoxNzM1MTQ5Njg3fQ.cqfL-iwJNUw8k79LMFzg1xfgT36Ye968uU9mYqrFCsKhctm4pNTDc374FnfDHw_jQsInNBDVXg33738WI-abbekEORS3uGahQqISXcVlLJXV65A5O6FfRa1wrbDQccQETw4jX2d_weMfraczbmuYAiv5-E9QU8nGCj6HTjNmHxZ5VGn_q9Qa1x5fqoqP_HDg_dfmL6O08Af4MW2mRqGQ5FIHQ7DIPdXJOCuzH5EJyfjrfpnsjAvBu0J4Pb_Ri2hoZLuSdcMfTNe0_4njdDJQyVa580SPq0-Onu-PaCfN8ZZfpCRkCU9djhxhsDitW48TsIL92BkzKJlMK8U_5s58EA" },
    { title: "The Lion and the Rose", link: "http://got-s04-e02" },
    { title: "Breaker of Chains", link: "http://got-s04-e03" },
    { title: "Oathkeeper", link: "http://got-s04-e04" },
    { title: "First of His Name", link: "http://got-s04-e05" },
    { title: "The Laws of Gods and Men", link: "http://got-s04-e06" },
    { title: "Mockingbird", link: "http://got-s04-e07" },
    { title: "The Mountain and the Viper", link: "http://got-s04-e08" },
    { title: "The Watchers on the Wall", link: "http://got-s04-e09" },
    { title: "The Children", link: "http://got-s04-e10" }
  ],
  S05: [
    { title: "The Wars to Come", link: "http://fast.com" },
    { title: "The House of Black and White", link: "http://got-s05-e02" },
    { title: "High Sparrow", link: "http://got-s05-e03" },
    { title: "Sons of the Harpy", link: "http://got-s05-e04" },
    { title: "Kill the Boy", link: "http://got-s05-e05" },
    { title: "Unbowed, Unbent, Unbroken", link: "http://got-s05-e06" },
    { title: "The Gift", link: "http://got-s05-e07" },
    { title: "Hardhome", link: "http://got-s05-e08" },
    { title: "The Dance of Dragons", link: "http://got-s05-e09" },
    { title: "Mother's Mercy", link: "http://got-s05-e10" }
  ],
  S06: [
    { title: "The Red Woman", link: "http://got-s06-e01" },
    { title: "Home", link: "http://got-s06-e02" },
    { title: "Oathbreaker", link: "http://got-s06-e03" },
    { title: "Book of the Stranger", link: "http://got-s06-e04" },
    { title: "The Door", link: "http://got-s06-e05" },
    { title: "Blood of My Blood", link: "http://got-s06-e06" },
    { title: "The Broken Man", link: "http://got-s06-e07" },
    { title: "No One", link: "http://got-s06-e08" },
    { title: "Battle of the Bastards", link: "http://got-s06-e09" },
    { title: "The Winds of Winter", link: "http://got-s06-e10" }
  ],
  S07: [
    { title: "Dragonstone", link: "http://got-s07-e01" },
    { title: "Stormborn", link: "http://got-s07-e02" },
    { title: "The Queen's Justice", link: "http://got-s07-e03" },
    { title: "The Spoils of War", link: "http://got-s07-e04" },
    { title: "Eastwatch", link: "http://got-s07-e05" },
    { title: "Beyond the Wall", link: "http://got-s07-e06" },
    { title: "The Dragon and the Wolf", link: "http://got-s07-e07" }
  ],
  S08: [
    { title: "Winterfell", link: "http://got-s08-e01" },
    { title: "A Knight of the Seven Kingdoms", link: "http://got-s08-e02" },
    { title: "The Long Night", link: "http://got-s08-e03" },
    { title: "The Last of the Starks", link: "http://got-s08-e04" },
    { title: "The Bells", link: "http://got-s08-e05" },
    { title: "The Iron Throne", link: "http://got-s08-e06" }
  ]
};

// Select Elements
const seasonSelect = document.getElementById("season");
const episodesDiv = document.getElementById("episodes");

// Load Episodes for Selected Season
function loadEpisodes(season) {
  episodesDiv.innerHTML = ""; // Clear previous episodes

  const seasonEpisodes = episodes[season];

  if (seasonEpisodes) {
    seasonEpisodes.forEach((episode, index) => {
      const card = document.createElement("div");
      card.classList.add("episode-card");

      card.innerHTML = `
        <img src="IMG_0745.png" alt="Episode Image">
        <h3>Episode ${index + 1}: ${episode.title}</h3>
        <a href="${episode.link}" target="_blank" class="play-btn">Play</a>
      `;

      episodesDiv.appendChild(card);
    });
  }
}

// Event Listener for Season Selection
seasonSelect.addEventListener("change", (e) => {
  loadEpisodes(e.target.value);
});

// Initial Load - Default Season 1
loadEpisodes("S01");
