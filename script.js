const img = (name) => `assets/images/${name}`;

const state = {
  guest: null,
  access: null,
  menuOpen: false,
  images: { backgrounds: [], gallery: [] },
};

const guestProfiles = {
  "John Doe": {
    access: "all",
    groups: ["Event Info Access", "LA Wedding"],
    household: ["John Doe", "Partner Guest"],
    mainEvents: ["ceremony", "reception"],
    preWedding: false,
    soCal: true,
  },
  "Jane Doe": {
    access: "limited",
    groups: ["Event Info Access"],
    household: ["Jane Doe"],
    mainEvents: ["ceremony", "reception"],
    preWedding: false,
    soCal: false,
  },
  "Jacob Doe": {
    access: "limited",
    groups: ["Event Info Access", "bridal shower"],
    household: ["Jacob Doe"],
    mainEvents: ["ceremony", "reception", "preWedding"],
    preWedding: true,
    soCal: false,
  },
};

const mainEvents = [
  {
    title: "CEREMONY",
    date: "MARCH 14 2025 9:30AM",
    place: "HAYES MANSION EAST LAWN",
    city: "SAN JOSE CALIFORNIA",
    note: "Vegetarian lunch to follow",
    link: "https://www.google.com/maps/place/Hayes+Mansion+San+Jose,+Curio+Collection+by+Hilton/@37.2623075,-121.8207757,17z/",
  },
  {
    title: "COCKTAIL HOUR",
    date: "MARCH 14 2025 6PM",
    place: "HAYES MANSION FOYER & TERRACE",
    city: "SAN JOSE CALIFORNIA",
    note: "Cocktails and light appetizers",
    link: "https://www.google.com/maps/place/Hayes+Mansion+San+Jose,+Curio+Collection+by+Hilton/",
  },
  {
    title: "THE RECEPTION",
    date: "MARCH 14 2025 7PM",
    place: "HAYES MANSION BALLROOM",
    city: "SAN JOSE CALIFORNIA",
    note: "Dinner, dessert, drinks and dancing",
    link: "https://www.google.com/maps/place/Hayes+Mansion+San+Jose,+Curio+Collection+by+Hilton/",
  },
];

const preWedding = [
  {
    title: "PELLIKUTHURU (BRIDAL SHOWER) & PELLIKODUKU (GROOM SHOWER)",
    date: "March 13, 2025 9:30AM",
    place: "SANTA PALMIA AT PALM VALLEY APARTMENTS CLUBHOUSE",
    city: "SAN JOSE, CALIFORNIA",
    note: "Lunch to follow",
    link: "https://www.google.com/maps/place/Santa+Palmia+at+Palm+Valley+Apartments/",
  },
];

const rituals = [
  ["01", "Ganesha Puja (గణేశ పూజ)", "The wedding ceremony begins with the groom performing the Ganesha puja (prayer), at the maṇḍapaṃ (the wedding altar, which represents the universe). Lord Ganesha is the remover of obstacles. These rituals are to ward off any evil and obstacles henceforth and to receive blessings for the bride & groom union."],
  ["02", "Bride's Entry", "The bride will walk to the mandapam, accompanied by family, in the background. The bride and groom sit across each other with a partition Terasala (a cloth screen) made by a curtain being placed between the bride and the groom. The bride and groom initially cannot see each other."],
  ["03", "Paṇigrahaṇaṃ (పాణిగ్రహణం)", "The groom holds the hand of the bride. The groom is made to chant in Sanskrit and assure the bride's family three times that he will remain her companion in joy and sorrow forever. The chants translate as follows: \"Righteously, financially, by desire, spiritually, I will not walk away from her\"."],
  ["04", "Jīlakarra Bellaṃ (జీలకర్రాబెల్లం)", "This is the most distinctive custom of Telugu weddings, and is timed to the minute to an auspicious time, called muhurtham, pre-determined by the priest prior to the wedding. The bride and groom each place a paste made from cumin seeds and jaggery on the other’s head, symbolizing their commitment to each other through the bitterness and sweetness of life. Just as the cumin cannot be separated from the jaggery, the now married couple's relationship is unbreakable and they are inseparable. The couple officially become united as husband and wife, as the curtain between them is removed."],
  ["05", "Maṅgaḷasūtra Dhāraṇa (మంగళసూత్రం)", "Maṅgaḷasūtra Dhāraṇa means tying Maṅgaḷasūtraṃ (holy thread). Mangalasutram is the symbol of eternal commitment, which the bride will wear from then on. The groom ties the string Maṅgaḷasūtraṃ, with two golden discs, called Sutrams, around the bride's neck, in three knots. The three knots signify the grooms acceptance of the bride in Thoughts (Manasa), Speech (Vacha) and Actions (Karmana). The ritual signifies the complete union of the couple: physically, mentally and spiritually."],
  ["06", "Talambralu (అక్షింతలు)", "Now it's time for some fun! The bride and groom pour a mixture of rice and turmeric over each other's head like a shower, eventually jovially competing to see who can dump their plate on the other first. Married people witnessing this occasion come forward to bless the couple, by sprinkling flower petals and rice coated with turmeric powder. Then the bride and groom exchange garlands (Dandalu) accepting each other as life partners."],
  ["07", "Nagavalli and Saptapadi (సప్తపది)", "The groom and bride walk together seven steps around the sacred fire (Homam), while taking these oaths: to nourish each other, to grow together in strength, to preserve their wealth, to share joys and sorrows, to care for each other, to care for children and parents, to remain life long friends. With this ceremony, the marriage is complete as per the Vedic scriptures."],
  ["08", "Pradhanam (ప్రధానం)", "Another fun game! A kunḍa (decorated silver or terra-cotta pot) full of water is placed in front of the couple, and a ring is put in it. The groom puts his right hand in and the bride puts her left hand in and they fish for the ring. They do this three times and whoever wins more often is supposed to be the dominant one in the marriage. This is a time of fun, with chants and shouts of support from both sides."],
  ["09", "Arundhati Nakshatram (అరుంధతి నక్షత్రం)", "One of the final rituals, where bride and groom are shown the stars representing Arundhati and Vasistha. These stars represent the perfect couple complementing each other. Mizar and Alcor are two stars forming a double star that can be seen with the naked eye in the handle of the Big Dipper (or the Plough) asterism in the constellation of Ursa Major. Mizar is the second star from the end of the Big Dipper's handle, and Alcor its faint companion. Alcor is recognized as Arundhati."],
];

const faqs = [
  ["what should i do during the gap between the ceremony and the reception?", "if you're local, you're welcome to go home. if you're staying at the hotel, feel free to head back to your room! we will also have a hospitality suite available underneath Hayes Mansion's ballroom with tables and chairs to hang out at, coffee + tea + water, and garment racks for your second look. a restroom is also available.\n\n( there will not be a coat check system for anything hung on the garment racks, so please be mindful of your belongings. )"],
  ["are kids allowed?", "Elijah and Pratyusha love kids and can't wait to meet yours! Please note there is no additional childcare provided."],
  ["can i take my own photos and videos during the events?", "absolutely! we will follow up after the wedding with a link for you to upload all of your photos and videos from the events. we are so excited to see what you capture!"],
  ["do i have to pay attention for the entire duration of the ceremony?", "you are most welcome to chat with your neighbor, enjoy a cup of chai or coffee from the cart, talk to your neighbor, or get up and walk around. there is no expectation that you be quiet or attentive throughout the entire 2 to 3 hour ceremony."],
  ["can i wear the same outfit to the ceremony and the reception?", "you are welcome to do that if you would like to! Pratyusha and Elijah will debut a second look for the evening festivities, and we invite our guests to do the same."],
  ["is there a sangeet, a rehearsal dinner, or a farewell brunch?", "there are no additional events for Elijah and Pratyusha, other than what is listed on the website. we are so excited to celebrate with you!"],
  ["i'm staying at the hotel. is there early check-in, or late check-out?", "check in is at 3pm and check out is at 11am at Hayes Mansion. early check in and late check out are unfortunately not guaranteed, although may become available on the day of check in / check out."],
  ["are events indoors or outdoors?", "rain permitting, the ceremony will be outdoors (it may still be chilly so we advise you bring a jacket) and the reception will be indoors."],
  ["can i bring a gift?", "we are so grateful for your presence, and are honored that you want to give us a gift. please check out the \"gifts\" section of the website for more information."],
];

const titleImages = {
  rsvp: 1,
  events: 1,
  travel: 2,
  style: 3,
  telugu: 4,
  registry: 5,
  faq: 6,
  socal: 7,
};

function normalizeName(name) {
  return name.trim().replace(/\s+/g, " ").toLowerCase();
}

function guestHasGroup(group) {
  return guestProfiles[state.guest]?.groups.includes(group) ?? false;
}

function onLogin(event) {
  event.preventDefault();
  const name = document.querySelector("#guestName").value;
  const guest = Object.keys(guestProfiles).find((profile) => normalizeName(profile) === normalizeName(name));
  if (guest) {
    loginAs(guest);
  } else {
    document.querySelector(".login-error").textContent = "Please enter John Doe, Jane Doe, or Jacob Doe.";
  }
}

function loginAs(guest) {
  const profile = guestProfiles[guest];
  if (profile) {
    state.guest = guest;
    state.access = profile.access;
    renderSite();
  }
}

function renderLogin() {
  document.querySelector("#app").innerHTML = `
    <main class="login">
      <div class="login-panel">
        <h2>Welcome to our Site!</h2>
        <form class="login-form" onsubmit="onLogin(event)">
          <input id="guestName" autocomplete="name" placeholder="Enter your full name to login" />
          <button type="submit"><span>Submit</span></button>
          <p class="login-error"></p>
        </form>
        <section class="access-demo" aria-labelledby="access-demo-title">
          <p class="access-kicker">GUEST ACCESS PREVIEW</p>
          <h3 id="access-demo-title">Different invitations, different views.</h3>
          <div class="access-profiles">
            <article class="access-profile">
              <div class="profile-heading"><h4>John Doe</h4><span>Full invitation</span></div>
              <p>Main wedding + SoCal wedding</p>
              <p>RSVP: ceremony + reception; no pre-wedding event</p>
              <p>John and a partner guest</p>
              <button type="button" class="profile-preview" onclick="loginAs('John Doe')">Preview as John <span aria-hidden="true">→</span></button>
            </article>
            <article class="access-profile">
              <div class="profile-heading"><h4>Jane Doe</h4><span>Main invitation</span></div>
              <p>Main wedding only</p>
              <p>RSVP for Jane only</p>
              <button type="button" class="profile-preview" onclick="loginAs('Jane Doe')">Preview as Jane <span aria-hidden="true">→</span></button>
            </article>
            <article class="access-profile">
              <div class="profile-heading"><h4>Jacob Doe</h4><span>Pre-wedding invitation</span></div>
              <p>Main wedding + pre-wedding event</p>
              <p>RSVP for Jacob only</p>
              <button type="button" class="profile-preview" onclick="loginAs('Jacob Doe')">Preview as Jacob <span aria-hidden="true">→</span></button>
            </article>
          </div>
        </section>
      </div>
    </main>
  `;
}

function eventCard(event) {
  return `
    <article class="event">
      <h3>${event.title}</h3>
      <h4>${event.date}<br>${event.place}<br>${event.city}</h4>
      <p>${event.note}</p>
      <a class="script-link" href="${event.link}" target="_blank" rel="noreferrer">location and directions</a>
    </article>
  `;
}

function rsvpEvent(name) {
  return `
    <div class="rsvp-row">
      <h3>${name}</h3>
      <div class="select-wrap">
        <select required class="hasPlaceholder">
          <option value="">Will you be joining us?</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
    </div>
  `;
}

function renderRsvpEvents() {
  const main = [
    { id: "ceremony", label: "March 14 2025 9:30am - Wedding Ceremony" },
    { id: "reception", label: "March 14 2025 6pm - Cocktail Hour and Wedding Reception" },
    { id: "preWedding", label: "March 13 2025 9:30am - Pellikuthuru & Pellikoduku (Telugu Bride & Groom Shower)" },
  ];
  const soCal = [
    { id: "socalWedding", label: "March 9 2025 10:30am - SoCal Wedding" },
  ];
  const profile = guestProfiles[state.guest];
  const events = [...main.filter(({ id }) => profile.mainEvents.includes(id) && (id !== "preWedding" || profile.preWedding)), ...(profile.soCal ? soCal : [])];
  return profile.household
    .map((person) => `
      <div class="rsvp-card">
        <input class="large disable" value="${person}" aria-label="Guest Name" />
        ${events.map(({ label }) => rsvpEvent(label)).join("")}
      </div>
    `)
    .join("");
}

function onRsvp(event) {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector(".form-fields").classList.remove("show");
  form.querySelector(".confirmation").classList.add("show");
  form.scrollIntoView({ block: "start", behavior: "smooth" });
}

function changeRsvp(button) {
  const form = button.closest("form");
  form.querySelector(".confirmation").classList.remove("show");
  form.querySelector(".form-fields").classList.add("show");
}

function sendRsvpCopy(button) {
  const form = button.closest("form");
  const email = form.querySelector("#copyEmail");
  if (!email.reportValidity()) return;

  const responses = [...form.querySelectorAll(".rsvp-card")].map((card) => {
    const guest = card.querySelector(".large")?.value || "Guest";
    const answers = [...card.querySelectorAll(".rsvp-row")].map((row) => {
      const answer = row.querySelector("select").selectedOptions[0].textContent;
      return `${row.querySelector("h3").textContent}: ${answer}`;
    });
    return `${guest}\n${answers.join("\n")}`;
  });
  const song = form.querySelector("textarea")?.value;
  const body = [...responses, song ? `Song request: ${song}` : ""].filter(Boolean).join("\n\n");
  const subject = "A copy of your RSVP";
  window.location.href = `mailto:${encodeURIComponent(email.value)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function navLinks() {
  const links = [
    ["#home", "HOME"],
    ["#style", "STYLE GUIDE"],
    ["#telugu", "MORE ABOUT TELUGU WEDDINGS"],
    ["#registry", "REGISTRY"],
  ];
  if (guestHasGroup("Event Info Access")) {
    links.splice(1, 0, ["#rsvp", "RSVP HERE"], ["#events", "MAIN EVENTS"]);
    links.push(["#travel", "TRAVEL"], ["#faq", "FAQ"]);
  }
  if (guestHasGroup("bridal shower")) links.push(["#before", "SUB EVENT"]);
  if (guestHasGroup("LA Wedding")) links.push(["#socal", "THE SO CAL WEDDING"]);
  links.push(["#gallery-sj", "GALLERY - SAN JOSE"], ["#gallery-ucla", "GALLERY - UCLA"]);
  return links.map(([href, label], index) => `<a href="${href}" style="--nav-item-index:${index}" onclick="${href === "#rsvp" ? "openRsvp(event); " : ""}closeMenu()">${label}</a>`).join("");
}

function titleBand(title, key, options = {}) {
  const file = options.plain ? null : state.images.backgrounds[titleImages[key]] || state.images.backgrounds[0];
  const style = file ? ` style="background-image:url('${img(file)}')"` : "";
  const className = ["title-band", options.plain ? "plain-title" : "", options.red ? "red-title" : "", options.accent ? "accent-title" : "", options.bottom ? "align-bottom" : ""].filter(Boolean).join(" ");
  const heading = `<h2>${title}</h2>`;
  const content = options.content ? `<div class="title-band-content">${heading}${options.content}</div>` : heading;
  return `<div class="${className}"${style}>${content}</div>`;
}

function revealRsvp() {
  const rsvp = document.querySelector("#rsvp");
  if (!rsvp) return;
  rsvp.classList.remove("hidden-rsvp");
  rsvp.inert = false;
  rsvp.setAttribute("aria-hidden", "false");
}

function scrollToRsvp() {
  document.querySelector("#rsvp")?.scrollIntoView({ block: "start", behavior: "instant" });
}

function openRsvp(event) {
  event?.preventDefault();
  revealRsvp();
  if (window.location.hash !== "#rsvp") {
    history.pushState(null, "", "#rsvp");
  }
  window.setTimeout(scrollToRsvp, 430);
}

function syncRsvpReveal() {
  if (window.location.hash === "#rsvp") {
    revealRsvp();
    window.setTimeout(scrollToRsvp, 430);
  }
}

function renderSite() {
  const bg = state.images.backgrounds;
  document.querySelector("#app").innerHTML = `
    <header class="site-header">
      <a class="brand" href="#home">Pratyusha & Elijah</a>
      <button class="menu-toggle" aria-label="Open menu" aria-controls="menu" aria-expanded="false" onclick="openMenu()"><span></span><span></span><span></span></button>
    </header>
    <nav class="nav-drawer" id="menu" aria-hidden="true" inert onclick="if (event.target === this) closeMenu()">
      <div class="nav-panel">
        <button class="nav-close" aria-label="Close menu" onclick="closeMenu(true)">×</button>
        <div class="nav-links">${navLinks()}</div>
      </div>
    </nav>
    <main>
      <section id="home" class="hero" style="background-image:url('${img(bg[0] || "84e14f2cde84607ecc7bf9971b44715c.jpeg")}')"></section>
      ${guestHasGroup("Event Info Access") ? `<section class="section cover-section" id="rsvp-link"><a href="#rsvp" onclick="openRsvp(event)">${titleBand("Click to<br>RSVP", "rsvp", { plain: true, red: true })}</a></section>
      <section class="rsvp-shell hidden-rsvp" id="rsvp" inert aria-hidden="true">
        <form class="rsvp" onsubmit="onRsvp(event)">
          <div class="rsvp-intro">
            <h2>Kindly Respond</h2>
            <h4>We cannot wait to celebrate with you! Please RSVP and/or book your stay by December 14, 2024.</h4>
          </div>
          <div class="form-fields show">
            ${renderRsvpEvents()}
            <div class="rsvp-card">
              <h3>I would be the first one on the dance floor if the DJ played...</h3>
              <textarea placeholder="Enter a song"></textarea>
            </div>
            <button class="scripted-button" type="submit"><span>Submit Response</span></button>
          </div>
          <div class="confirmation confirm-box">
            <h3>Thank you for your reply.</h3>
            <p><a class="script-link" href="#rsvp" onclick="changeRsvp(this); return false;">↻ Change my RSVP</a></p>
            <div class="copy-row">
              <label for="copyEmail">✉ Send me a copy</label>
              <input id="copyEmail" type="email" placeholder="Enter Your Email" required />
              <button class="send-arrow" type="button" aria-label="Send copy" onclick="sendRsvpCopy(this)">→</button>
            </div>
          </div>
        </form>
      </section>` : ""}
      ${guestHasGroup("Event Info Access") ? `<section class="section live-section" id="events">${titleBand("EVENTS", "events")}<div class="content-block"><div class="event-grid">${mainEvents.map(eventCard).join("")}</div></div></section>` : ""}
      ${guestHasGroup("bridal shower") ? `<section class="section live-section no-band" id="before"><div class="content-block narrow"><h2 class="subdisplay">Before the Wedding</h2><div class="event-grid single">${preWedding.map(eventCard).join("")}</div></div></section>` : ""}
      ${guestHasGroup("Event Info Access") ? `<section class="section live-section" id="travel">${titleBand("Travel & Accommodation", "travel")}<div class="content-block"><div class="three-grid">
        <article class="info-block"><h3>FLIGHTS</h3><h4>FLY DIRECTLY INTO SAN JOSE<br>OR DRIVE IN FROM SAN FRANCISCO</h4><a class="script-link" href="https://www.expedia.com/" target="_blank" rel="noreferrer">find a flight</a></article>
        <article class="info-block"><h3>HOTEL</h3><h4>STAY WITH US AT THE VENUE<br>ROOM BLOCK AVAILABLE</h4><a class="script-link" href="https://book.passkey.com/e/50891360" target="_blank" rel="noreferrer">book a room</a></article>
        <article class="info-block"><h3>PARKING</h3><h4>COMPLIMENTARY SELF PARKING<br>AVAILABLE AT VENUE</h4><a class="script-link" href="https://www.google.com/maps/place/Hayes+Mansion+San+Jose,+Curio+Collection+by+Hilton/" target="_blank" rel="noreferrer">get directions</a></article>
      </div></div></section>` : ""}
      ${styleSection()}
      ${teluguSection()}
      ${registrySection()}
      ${guestHasGroup("Event Info Access") ? faqSection() : ""}
      ${guestHasGroup("LA Wedding") ? soCalSection(bg) : ""}
      ${gallerySection("gallery-sj", "Photography Credit: Andra Blythe", 0, 53)}
      ${gallerySection("gallery-ucla", "Photography Credit: Mike Yoon", 53, 110)}
      <section class="rsvp-spacer" aria-hidden="true"></section>
    </main>
    <div class="modal" id="modal"><button onclick="closeModal()">×</button><img alt="" /></div>
  `;
  window.requestAnimationFrame(syncRsvpReveal);
}

function styleSection() {
  return `
    <section class="section live-section" id="style">${titleBand("Style Guide", "style")}<div class="content-block text-page">
      <h2>Dress Codes</h2>
      <article class="info-block"><h3>Wedding Ceremony</h3><h4>Love in the Time of the California Superbloom: semiformal, bright, wildflower-like colors</h4><p class="dress-copy">Men: kurta sets, jacket and dress pants, sherwani<br>Women: saree, lehenga, cocktail dress below the knee or longer</p></article>
      <article class="info-block"><h3>Cocktail Hour and Reception</h3><h4>Sunset Glow: formal evening wear in warm colors or jewel tones</h4><p class="dress-copy">Men: sherwani, suits<br>Women: saree, lehenga, formal gown</p><a class="script-link" href="https://www.pinterest.com/javangulakravets/pratyusha-and-elijahs-wedding-outfit-inspiration/" target="_blank" rel="noreferrer">Outfit Inspiration Pinterest Board</a></article>
      <h2>More info</h2>
      <h3>Online Shopping Hub</h3>
      <p><a class="script-link" href="https://www.azafashions.com/">Aza Fashions</a> <a class="script-link" href="https://www.kalkifashion.com/">Kalki Fashions</a> <a class="script-link" href="https://www.lashkaraa.com/">Lashkaraa</a> <a class="script-link" href="https://www.perniaspopupshop.com/">Pernia's Pop-Up Shop</a></p>
      <h3>Key Terms in Indian Fashion</h3>
      <p class="dress-copy">Blouse: Half shirt (sleeves optional) for women that can be made out of cotton, silk, and many other fabrics. Many Indian outfits for women include a blouse.<br><br>Petticoat: Underskirt traditionally worn under sarees.<br><br>Dupatta (also known as Chunni): A length of material worn as a scarf on many women's outfits.<br><br>Saree: Traditional wear for women made out of 6 yard of fabric that is pleated, pinned, and draped over a blouse and petticoat.<br><br>Lehenga: Traditional wear for women comprised of a blouse, a skirt, and a dupatta.<br><br>Sharara: A set made up of wide legged pants and a longer blouse.<br><br>Anarkali: An Indian gown that goes below the knee, with pants underneath. Anarkalis are often heavily adorned with bead and mirrorwork.</p>
      <h2>Even more information</h2>
      <h3>Additional tips</h3>
      <p class="dress-copy">If you are placing an order with one of the retailers we have linked above, please check the size chart before ordering. Many of these retailers keep strict return policies when shipping to the United States.<br><br>Please keep in mind that red is traditionally a color worn exclusively by the bride in Indian weddings.<br><br>If you are interested in wearing Indian clothes that do not show the midriff, consider these styles: anarkali, salwar kameez, sharara, and gharara.</p>
      <a class="script-link" href="https://sleet-calendula-d31.notion.site/More-Information-to-Help-You-with-Your-Indian-Outfit-for-Pratyusha-Elijah-s-Wedding-18968b5fd7d080478b1cd00050cae076" target="_blank" rel="noreferrer">styling + accessory guide</a>
    </div></section>`;
}

function teluguSection() {
  return `<section class="section live-section" id="telugu">${titleBand("MORE ABOUT TELUGU WEDDINGS", "telugu", { accent: true })}<div class="content-block text-page"><h3>Pratyusha's family is Telugu, hailing from a southeastern state in India called Andhra Pradhesh. Telugu weddings are rich in culture, tradition, and meaning. Some of the rituals and ceremonies that will take place at Elijah and Pratyusha's Indian wedding ceremony are briefly summarized below.</h3><p class="dress-copy">Please note: the ceremony is quite long (between two and three hours). You are permitted to get up and use the restroom, have water, even chat with your neighbors. You are also most welcome to take photos and videos to your heart's content.</p><div class="rituals">${rituals.map(([n, title, copy]) => `<article class="ritual"><div class="ritual-number">${n}</div><div><h3>${title}</h3><p>${copy}</p></div></article>`).join("")}</div></div></section>`;
}

function registrySection() {
  return `<section class="section live-section" id="registry">${titleBand("Gifts", "registry", { content: `<p class="registry-copy">Your presence at our wedding is the greatest gift we could ask for. If you would still like to give us a gift, our registry fund is linked below.</p><a class="script-link registry-link" href="https://blissandbone.sendbirdie.com/r/javangulakravets" target="_blank" rel="noreferrer">Pratyusha & Elijah's Registry</a>` })}<div class="content-block text-page"><h2>The countdown to the big day is on!</h2><div class="countdown"><span><strong>00</strong>days</span><span><strong>00</strong>hours</span><span><strong>00</strong>minutes</span></div></div></section>`;
}

function faqSection() {
  return `<section class="section live-section" id="faq">${titleBand("faq", "faq")}<div class="content-block text-page"><div class="faq-list">${faqs.map(([q, a]) => `<article class="faq-item"><h3>${q}</h3><p>${a.replace(/\n/g, "<br>")}</p></article>`).join("")}</div></div></section>`;
}

function soCalSection(bg) {
  const schedule = [
    ["aee14e2c42e366abf1299906099c5d5d.jpeg", "JEWISH WEDDING CEREMONY", "10:30 AM"],
    ["9a49eef73e489fae9cd16766096eeef0.jpeg", "COCKTAIL HOUR", "11:15 AM"],
    ["77dbe4b9b7dad471d083abcb9f9bc4de.jpeg", "BRUNCH RECEPTION", "12:00 PM"],
  ];
  const logistics = [
    ["fffc454029e84940e82de34ecfcc0509.jpeg", "FLIGHTS"],
    ["5f295bbd71cbd7626ba06b43e67caa68.jpeg", "STAY"],
    ["20d0e5e3c7b252c1ecb5a258b7a35994.jpeg", "PARKING"],
  ];
  return `<section class="section live-section" id="socal">${titleBand("THE SO CAL WEDDING", "socal")}<div class="content-block text-page"><h3>MARCH 9 2025<br>AOC WEST HOLLYWOOD<br>LOS ANGELES, CA</h3><a class="script-link" href="https://www.google.com/maps/place/A.O.C./@34.0734135,-118.3819272,16z/data=!3m1!4b1!4m6!3m5!1s0x80c2b936c5b2a55f:0xa50015511555f764!8m2!3d34.0734135!4d-118.3819272!16s%2Fm%2F0ynj2h8" target="_blank" rel="noreferrer">location and directions</a><h2>Schedule of Events</h2><div class="event-grid socal-event-grid">${schedule.map(([icon, title, time]) => `<article class="event socal-event"><img class="socal-icon" src="${img(icon)}" alt="" aria-hidden="true"><h3>${title}</h3><h4>${time}</h4></article>`).join("")}</div><h2>Travel, Stay, and Day-of Logistics</h2><div class="three-grid socal-logistics-grid"><article class="info-block socal-logistics"><img class="socal-icon" src="${img(logistics[0][0])}" alt="" aria-hidden="true"><h3>FLIGHTS</h3><h4>FLY DIRECTLY INTO LOS ANGELES<br>OR DRIVE IN FROM BURBANK OR ORANGE COUNTY</h4><a class="script-link" href="https://www.google.com/maps/place/Los+Angeles+International+Airport/" target="_blank" rel="noreferrer">lax international airport</a></article><article class="info-block socal-logistics"><img class="socal-icon" src="${img(logistics[1][0])}" alt="" aria-hidden="true"><h3>STAY</h3><h4>BOOK YOUR STAY CLOSE BY</h4><p class="so-cal-copy">Airbnb or hotel in West Hollywood or surrounding area (Culver City, Santa Monica, West LA) is recommended.</p><a class="script-link" href="mailto:javangulakravets@gmail.com">email Pratyusha & Elijah for more assistance</a></article><article class="info-block socal-logistics"><img class="socal-icon" src="${img(logistics[2][0])}" alt="" aria-hidden="true"><h3>PARKING</h3><h4>COMPLIMENTARY VALET<br>AVAILABLE AT VENUE</h4></article></div><h2>DRESS CODE</h2><h3>Semi-Formal</h3><p class="so-cal-copy">Men: jacket and dress pants, suits<br>Women: cocktail dresses, dressy jumpsuits, semi-formal Indian traditional wear.<br><br>Women, please cover your shoulders during the ceremony. Kippot (also known as yarmulkes) will be made available for men.</p></div></section>`;
}

function gallerySection(id, credit, start, end) {
  const files = state.images.gallery.slice(start, end);
  return `<section class="gallery-collage" id="${id}">${files.map((file, index) => `<button class="gallery-item ${index % 7 === 1 || index % 7 === 2 ? "short" : "tall"}" type="button" onclick="openModal('${img(file)}')"><img src="${img(file)}" loading="lazy" alt=""></button>`).join("")}<p class="credit">${credit}</p></section>`;
}

function openMenu() {
  const menu = document.querySelector("#menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu || state.menuOpen) return;

  state.menuOpen = true;
  menu.inert = false;
  menu.setAttribute("aria-hidden", "false");
  menu.classList.add("open");
  toggle?.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  document.querySelector(".nav-close")?.focus();
}

function closeMenu(restoreFocus = false) {
  const menu = document.querySelector("#menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu || !state.menuOpen) return;

  state.menuOpen = false;
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
  menu.inert = true;
  toggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  if (restoreFocus) toggle?.focus();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.menuOpen) closeMenu(true);
});

function openModal(src) {
  const modal = document.querySelector("#modal");
  modal.querySelector("img").src = src;
  modal.classList.add("open");
}

function closeModal() {
  document.querySelector("#modal")?.classList.remove("open");
}

fetch("assets/images.json")
  .then((response) => response.json())
  .then((images) => {
    state.images = images;
    renderLogin();
    window.addEventListener("hashchange", syncRsvpReveal);
  })
  .catch(() => {
    renderLogin();
    window.addEventListener("hashchange", syncRsvpReveal);
  });
