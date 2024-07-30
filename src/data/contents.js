export const getContentByProjectEndpoint = (projectEndpoint) => {
  const content = {
    // "world-flags-tour": {
    //   title: "World Flags Tour",
    //   content: `<p>I made this flag quiz project to solve a personal problem I encountered with existing quizzes. Most flag quizzes only test recognition in one direction: identifying a country from its flag (like on JetPunk or Seterra). They either offer a small list of countries to choose from, which makes guessing too simple with a bit of elimination, or they present all the flags in a fixed order, leading me to memorize the sequence rather than the flags themselves.</p>
    //   <p>My quiz tackles this by working both ways:</p>
    //   <ul><li>flag → country,</li><li>country → flag.</li></ul>
    //   <p>For the <em>country → flag</em> direction, I added a color search feature using image processing to automatically detect dominant colors and a symbol search feature (star, moon, etc.) using machine learning. This speeds up the search and makes it much more intuitive. It also helps memorizing the attributes of each flag.</p>
    //   <p>For the <em>flag → country</em> direction, existing quizzes already handle the user experience effectively. My quiz presents the flags to be guessed in a random order.</p>
    //   <p>The developed quiz also includes a timed mode to compare your score against the average.</p>`
    // },
    // "drawlo": {
    //   title: "Drawlo",
    //   content: "This is the content of the Drawlo project."
    // },
    // "paldex": {
    //   title: "Paldex",
    //   content: "Coming soon."
    // },
    "pokedex": {
      title: "Pokédex",
      content: `
        <p>I developed this Pokédex for a client, collaborating with a friend to address gaps in existing Pokémon tracking tools.</p>
        <p>Unlike most Pokédex websites, which are typically desktop-focused, English-only, or offer limited interactive features, this Pokédex is designed with a mobile-first approach and is primarily available in French. It offers a seamless and engaging experience on smartphones and tablets, ensuring accessibility and functionality across devices.</p>
        <p>It provides:</p>
        <ul>
          <li class="paragraph">Detailed Information: Each Pokémon entry provides an overview with comprehensive details, including stats, evolutions, and attacks.</li>
          <li class="paragraph">Visuals and Filtering: Users can view Pokémon images and filter results by different criteria, such as name, type or generation.</li>
          <li class="paragraph">Multi-language Support: The Pokédex is available in French, English, and Spanish.</li>
        </ul>
        <p>By focusing on SEO, it ranks second on Google for the search term <em>pokedex fr</em>.</p>
        <p>The Pokédex leverages data from the PokeAPI: <a href="https://github.com/PokeAPI" target="_blank">see PokeAPI github</a>.</p>
      `
    },
    "knowledge-transfer": {
      title: "Knowledge Transfer",
      content: `
        <div style="margin-bottom: 40px; display: flex; gap: 16px;">
          <img src="/assets/projects/ktapp-home.webp" style="width: 25%;" loading="lazy">
          <img src="/assets/projects/ktapp-nav.webp" style="width: 25%;" loading="lazy">
          <img src="/assets/projects/ktapp-farmers.webp" style="width: 25%;" loading="lazy">
        </div>
        <p>This project is a mobile application and a admin panel that I developed with 3 people at BiKay (Cambodia) for the East West Seed Foundation.</p>
        <p>The mobile application helps their employees collecting and analyzing data about farmers to enhance their crops profitability.</p>
        <p>Its scope extends to nearly <b>150,000</b> farmers trained annually in remote regions of Asia.</p>
        <a href="https://www.eastwestseed.com/" target="_blank" style="margin-top: 16px;">learn more about EWS</a>
      `
    },
    "fractallium": {
      title: "Fractallium",
      content: `
        <p>Fractallium is a French startup specializing in content creation processes. Fractallium helps brands enhance their creations through their media experience and expertise in signal processing and applied AI.</p>
        <p>I developed the initial version of their landing page to enhance their credibility and visibility.</p>
      `
    },
    "cocktail": {
      title: "Cocktail",
      content: `
        <div style="margin-bottom: 40px; display: flex; justify-content: center;">
          <img src="/assets/projects/cocktail-home.webp" style="width: 80%; max-width: 400px;" loading="lazy">
        </div>
        <p>A web application that oversees pre-scheduled courses and enables teachers to register for their upcoming classes.</p>
        <p>Its yearly coverage encompasses <b>10,000</b> courses for <b>500</b> teachers.</p>
        <p>The design was heavily inspired by <a href="https://synapses.mines-albi.fr/" target="_blank">SynapseS</a>, the educational tracking platform used by my school (IMT Mines Albi). Since teachers are already familiar with SynapseS, they can navigate Cocktail easily.</p>
        <p>The application includes a calendar view, a list view, an admin panel, and a teacher panel. The admin can manage the list of teachers and assign responsibles for each course unit.</p>
      `
    }
  }

  return content[projectEndpoint]
}