$(document).ready(function() {
    
    setTimeout(function() {
        $('.loader-container').fadeOut(500);
    }, 2500);
    
    $('.menu-btn').click(function(){ openNav() });

    const openNav = function(){
        $('nav, .nav-overlay').addClass('open');
    }

    $('.nav-overlay').click(function(){
        $('nav, .nav-overlay, .overlay-video').removeClass('open');
        var frame = document.querySelector(".overlay-video");
        frame.parentNode.removeChild(frame);
        
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute('class', 'overlay-video');
        ifrm.setAttribute('frameborder', '0');
        var el = document.querySelector('.nav-overlay');
        el.parentNode.insertBefore(ifrm, el);
        ifrm.setAttribute('src', 'https://www.youtube.com/embed/ikh7GqtHSWc?rel=0');
    });

    const closeNav = function() {
        document.querySelector('nav').classlist.remove('open');
    };
    
    particlesJS.load('particles-js', 'js/particles.json');
    
    /*************************************************************
    Preload Images
    **************************************************************/

    const imageArray = [
        "../img/artists/jimpster.jpg",
        "../img/artists/pangaea.jpg",
        "../img/artists/tessela.jpg",
        "../img/artists/compa.jpg",
        "../img/artists/voiski.jpg",
        "../img/artists/baikal.jpg",
        "../img/artists/blot.jpg",
        "../img/artists/lands.jpg",
        "../img/artists/hamza.jpg",
        "../img/artists/sandunes.jpg",
        "../img/artists/sindhi-curry.jpg",
        "../img/artists/dotdat.jpg",
        "../img/artists/ape-echoes.jpg",
        "../img/artists/blurry-slur.jpg",
        "../img/artists/likwid.jpg",
        "../img/artists/spryk.jpg",
        "../img/artists/deep-brown.jpg",
        "../img/artists/bhish.jpg",
        "../img/artists/abhi-meer.jpg",
        "../img/artists/rishon-bondal.jpg",
        "../img/artists/moon-roots-project.jpg",
        "../img/artists/zapdos.jpg",
        "../img/artists/ezzyland.jpg"
    ]

    function preloadImage(imgarr) {
        let imgobj=new Image();
        imgobj.src=imgarr;
    }

    imageArray.forEach(function(i){
        preloadImage(i);
    });

    /*************************************************************
    Vue App Setup
    **************************************************************/

    const artistsArray = [
        {
            id: 'jimpster',
            name: 'Jimpster',
            img: 'img/artists/jimpster.jpg',
            bio: "Taste-maker, label boss, producer, DJ, remixer. Jamie Odell wears many hats and wears them well.<br/><br/>Under his Jimpster alias, he has become one the most revered deep house producer/DJs operating on the scene today. His esteemed labels Freerange and Delusions Of Grandeur continue to help break incredible new music and equally impressive acts such as Detroit Swindle, Tornado Wallace and Session Victim. From his UK base, Jimpster has inadvertently become a standard-bearer and custodian of the authentic house sound, and carries this flag to the four corners of the world.<br/><br/>As he puts it: \"House music has been my first love and passion since hearing 'Strings Of Life' for the first time at The Essex Barn in 1988 and I'm still inspired by the memories I have of that period when the whole electronic music scene was so fresh and exciting as well as being really broad and eclectic. One minute we were listening to Lil Louis' 'The Story Continues' and the next, freaking out to 'Radio Babylon' by Meat Beat Manifesto. Every track seemed to have its own strong identity and unique sound and I guess that ethos is something I try and carry through to my A&R for the labels as well as my DJ sets. Certainly as a producer I am still striving to produce that perfect house track which will stand the test of time in the same way that those early classics have. The blueprint is simple: to inject life, depth, soul, sincerity and attitude. This is what sets the major players apart from the pretenders. That challenge is what keeps me focused and inspired 25 years on and I'm sure it will keep me on my toes for many years to come.\" With Jimpster still doing the business at globally renowned hotspots like Output (New York), Womb (Tokyo), and Watergate (Berlin), a slew of new music on the way, the ideas flowing freely from his studio and with over two decades of experience to draw on we see clearly that the fire is still burning as brightly as ever.",
            fb: "https://facebook.com/jimpster.freerange",
            insta: "https://instagram.com/jimpsterfreerange",
            twitter: "https://twitter.com/jamiejimpster",
            soundcloud: "https://soundcloud.com/jimpster",
            ra: "https://residentadvisor.net/dj/jimpster"
        },
        {
            id: 'pangaea',
            name: 'Pangaea',
            img: 'img/artists/pangaea.jpg',
            bio: "Pangaea, aka Kevin McAuley, makes electronic dance music that draws its energy from the bleeding edges between sounds. Steering clear of the self-perpetuating feedback loops that often exist within established scenes, his tracks instead express the elusive and innovative qualities thatcharacterise club genres in their infancy. <br/><br/> In 2007 Pangaea established the Hessle Audio label along with Ben UFO and Pearson Sound, which has expanded over the years to become a unique and pioneering force in modern club music. The label's ethos is simple: to draw together original and boundary-pushing music not being represented elsewhere. As a trio they&#39;ve been at the forefront of a scene that&#39;s accelerated at an unprecedented rate, making their enviable ability to stay ahead of the curve all the more impressive with a roster that boasts the indisputable talents of James Blake, Peverelist, Blawan and more.<br/><br/> Pangaea&#39;s productions and DJ sets have continually expanded to encompass a growing diversity of influences, reaching outward to integrate techno, house and jungle into their rhythmic axis. The resulting music is an incendiary hybrid rooted in UK hardcore traditions, as can be heard on the fabriclive.73 mix CD and latest EP for his own Hadal imprint.",
            fb: "https://facebook.com/pangaeauk",
            insta: "https://instagram.com/pangaeauk",
            twitter: "https://twitter.com/pangaeauk",
            soundcloud: "https://soundcloud.com/pangaea",
            ra: "https://residentadvisor.net/dj/pangaea"
        },
        {
            id: 'tessela',
            name: 'Tessela',
            img: 'img/artists/tessela.jpg',
            bio: "Tessela’s music is in constant motion, always moving forward whilst drawing inspiration from the UK’s rich history of rave culture. Slamming broken beats and a smart sense of rhythm have marked him out from the crowd, with a slew of records for R&S, Bleep and Poly Kicks (the label he co-runs with his brother, Truss) cementing his reputation for raw, driving club music. <br/><br/>As a DJ, he casts the net wide over techno’s crossroads and builds propulsive, polyrhythmic sets that use a number of ‘locked groove’ records to create new loops and rhythms on the fly. <br/><br/>Most recently he has teamed up with Truss to form Overmono. Signed to XL Recordings, the project explores all further reaches of their combined influences.",
            fb: "https://facebook.com/tesselamusic",
            twitter: "https://twitter.com/tesselamusic",
            soundcloud: "https://soundcloud.com/tessela",
            ra: "https://residentadvisor.net/dj/tessela"
        },
        {
            id: 'compa',
            name: 'Compa',
            img: 'img/artists/compa.jpg',
            bio: "After an introduction to turntables along with drum & bass records in his early teens, Compa later found a college teacher of his producing music one break time, which lead to his discovery of music production software. This, timed perfectly as he stumbled upon 'Midnight Request Line' by Skream lead to an obsession with electronic music, Dubstep in particular. With his own music now to hand, he discovered dubplates. The discovery became a passion and paired with a growing record collection, his format of choice was cemented at an early age.<br/><br/>Following his debut appearance on Get Darker TV in March 2011, Compa released his inaugural 12\" single with one of Dubstep's foundation imprints Boka Records, along with his infamous bootleg of Mavado’s ‘Dem A Talk', and at the tender age of just 21, he signed to the institutional Dubstep record label Deep Medi Musik releasing his highly sought after dubplate 'Alpha' backed with 'Narabeh' in 2013.<br/><br/>Flash-forward three years and now a well traveled DJ, Compa remains true to the roots of the genre, armed with a deep bag of dubplates as he remains one of the only remaining vinyl and dub plate DJs in the underground.<br/><br/>Compa’s music has received acclaim from revered tastemakers such as BBC 6 Music's Mary Anne Hobbs and Gilles Peterson, BBC Radio 1 and 1Xtra's Toddla T and MistaJam, Reggae and sound clash legend David Rodigan, Chase and Status (Ram Records, Mercury) and of course Mala (Deep Medi, DMZ) amongst others.<br/><br/>Compa continues to expand, launching his club brand 'Compa Presents' alongside Boiler Room TV to a live audience of over 100,000 viewers on the night along with setting his record label CPA Records in motion with a collaboration with Grime pioneer Footsie of Newham Generals with an aim towards diversifying as a producer.",
            fb: "https://facebook.com/compauk",
            insta: "https://instagram.com/compauk",
            twitter: "https://twitter.com/compauk",
            soundcloud: "https://soundcloud.com/compauk"
        },
        {
            id: 'voiski',
            name: 'Voiski',
            img: 'img/artists/voiski.jpg',
            bio: "For several years, Voiski has struck a singular path in techno music, oscillating between experimental projects and the production of tracks marked by his signature style. Within the large spectrum of his interventions, Voiski stands out for rigor of his infinitely repetitive loops. These, combined with acerbic drum beats, construct an analog excitation that carries his music to the heart of futurist and sentimental layerings. From his proximity to the intriguing electrodance duo Kartei to the experimental label Silicate Musique which he codirects, the amplitude of his activity bears witness to the authenticity of his engagement, one which reconciles the demands of dance floor techno with the construction of an introspective vision. <br/><br/> An insatiable producer, he has already produced several important titles which one can still hear resonating over the world. His work can be found on several labels, including, Construct-Reform (Paris), Delsin (Amsterdam), Wt Records and L.I.E.S. (New York).",
            fb: "https://facebook.com/voiskiii",
            soundcloud: "https://soundcloud.com/voiski",
            ra: "https://residentadvisor.net/dj/voiski"
        },
        {
            id: 'baikal',
            name: 'Baikal',
            img: 'img/artists/baikal.jpg',
            bio: "The name Baikal comes from the words ‘Bai Kyul’, which translates as ‘rich lake’. Lake Baikal is the most voluminous freshwater lake in the world, containing roughly 20% of the world’s unfrozen surface fresh water, and at 1,642m, the deepest. It is also among the clearest of all lakes, and thought to be the world’s oldest at 25 million years.<br/><br/>Baikal resides in Berlin and makes multi-layered electronic music for the heart, mind and feet. Preferably all at the same time and on his imprint Maeve, a joint venture with Mano Le Tough and The Drifter.<br/><br/>Baikal’s existence lies in the idea that the music itself, the abstract experience and the emotions it provokes should tell enough of a story to entertain you as the listener, and that the persona behind the artist is of lesser importance.",
            fb: "https://facebook.com/baikalberlin",
            insta: "https://instagram.com/baikalberlin",
            soundcloud: "https://soundcloud.com/baikal-bai-kyul",
            ra: "https://residentadvisor.net/dj/baikal"
        },
        {
            id: 'blot',
            name: 'BLOT!',
            img: 'img/artists/blot.jpg',
            bio: "BLOT! is a live electronic music project based out of Delhi, India. Straddling music and art, party and performance, Gaurav Malaker is the producer and DJ at the helm of the project. <br/><br/>Since its start in 2007 with Thiruda (Avinash), BLOT! has slowly edged away from more minimal sounds into mastery of a warmer and more emotive sound that straddles techno and deeper side of modern house. The producer has delivered an inspiring run of music releases in his career spanning a decade, as well as immersive audiovisual sets and innumerable art installations both in India and abroad.<br/><br/>With a full length album released on Universal Music in 2013 as well as a more recent release on iconic label Diynamic Music, he is one of India’s most sought-out producers, and performs at club and festival dates all over the country to an extremely loyal fan base, which is rivalled by few.<br/><br/>BLOT!’s club act evolves continually. The producer has a hands-on approach to his gigs, and his current preoccupation with warm, analogue sounds and classic synthesizers have resulted in a slew of recent productions that are deep and delicate in equal measure, warm tracks with delicious chords and big basslines that are destined for the dancefloor, but at home anywhere.<br/><br/>Malaker was also recently voted into the GQ 50 Most Influential Young Indians list, and has performed at legendary venues and festivals across the world including Tresor and Bar25 (Berlin), Nuits Sonores (Lyon) and at London’s South Bank Centre. <br/><br/>In 2014 BLOT! won the VH1 Soundnation award for Best Electronic Act, following up with a double win at the MyFav Awards 2016, for Artist of the Year and Best Techno DJ. He has also scored advertisements for iconic brands and films, BLOT! is also one of the names responsible for co founding the interdisciplinary creative festival UnBox and underground electronica label Qilla Records. BLOT! was previously awarded a grant by the Wellcome Collection to research and collaborate on Medicine Corner, a programme of performances, film, and cultural activity based on informal health care practices from 2016-2017.",
            fb: "https://facebook.com/blottin",
            insta: "https://instagram.com/blottin",
            twitter: "https://twitter.com/blottin",
            soundcloud: "https://soundcloud.com/blot"
        },
        {
            id: 'lands',
            name: 'Lands aka NICHOLSON',
            img: 'img/artists/lands.jpg',
            bio: "LANDS is a Dream-Pop duo from Mumbai, India and is the brainchild of singer-songwriter Sohrab Nicholson and Producer/ multi-instrumentalist Rohan Ramanna. They launched their project in 2014 at the National Centre for performing Arts, and since have played to audiences both domestically and internationally, at venues and festivals such as the South Bank Centre in London, Glasgow’s Concert Halls, Nh7 Weekender, Magnetic Fields Festival, Ziro Festival of Music and the Great Escape Festival in the UK to name a few.<br/><br/> Their music is an amalgamation of the similarities and disparities in their individual tastes. Heavily influenced by Jazz, Folk, Pop, Electronica, Soul, RnB, Hip-Hop, feature film scores, the environments and people around them, and not bound by genre, LANDS is currently finishing their first LP, Love and other Machinery, which should be out early 2018.",
            fb: "https://facebook.com/landslandsmusic",
            insta: "https://instagram.com/sohrabnicholson",
            twitter: "https://twitter.com/landslandsmusic",
            soundcloud: "https://soundcloud.com/landslandsmusic"
        },
        {
            id: 'hamza',
            name: 'Hamza',
            img: 'img/artists/hamza.jpg',
            bio: "Hailing from New Delhi, Hamza has attained a reputation as a pioneer of the house scene in India and one of the more innovative and exciting up-and-coming producers today. Hamza's diverse international sound is influenced from his strong musical background as well as growing up in India and traveling the world, living in Paris, Boston, and New York. Exposure to renowned house DJs such as Terry Francis, Dave Mothersole, DJ Heather, and Danny Teneglia inspired Hamza to create his own electronic dance productions. Soon he found a unique style of house music combining deep, tribal, and funky sounds with strong world music influences.<br/><br/>To further nourish this growing production repertoire, Hamza has set up his own label Wind Horse Records. While in New York, Hamza did his Masters in Music Business at New York University, which gave him a very strong foundation and insight into how to creatively promote his own music. Wind Horse Records, the first Indian house music label, is a major part of that vision. Hamza has recently launched the label with his own Sufi Soul EP, containing three original world music influenced house music jewels. The Sufi Soul EP's vibrant, tribal sound earned the notice and accolades of many new fans including Dubfire (Deep Dish), Peter Kruder (Kruder & Dorfmeister), Richie Hawtin, Quentin Harris, and Tom Findlay (Groove Armada).<br/><br/>Hamza is also a top notch DJ, bringing his fresh sound to dancefloors from New York to Portugal, Boston to Hyderabad, Paris to Pune. His sets typically start with his signature deep house sound, heavily influenced by Latin/Afro/World flavors, before developing into powerful tribal and deep, tech-house influenced beats perfect for the peak time. Hamza's unmistakable style, combined with many of his own productions, create memorable DJ sets that turn many clubbers into instant fans and followers.",
            fb: "https://facebook.com/hamzabeats",
            insta: "https://instagram.com/hamzarahimtula",
            soundcloud: "https://soundcloud.com/hamzarahimtula"
        },
        {
            id: 'sandunes',
            name: 'Sandunes',
            img: 'img/artists/sandunes.jpg',
            bio: "Like her naturally occurring namesake, Sandunes - otherwise known as Sanaya Ardeshir - plays with broad landscapes of sound. Her sonic identity has evolved alongside her journey from pianos to production.<br/><br/>Her performances over the last 5 years, reveal an appetite for integrating studio and stage. She works with a combination of hardware synthesisers, software, and found sound. <br/><br/>Outside of the studio, Sandunes advocates accessibility and exposure around music-making, and regularly workshops around music production and performance, including at Ableton's LOOP in Berlin, at Mumbai's G5A and on Point Blank's online network. <br/><br/>In 2015 she co-founded Perfectiming - her duo with beat poet and RBMA alum, Jivraj Singh. She is a founding member of DASTA - a beatmakers collective that focuses on DIY growth and empowerment through the arts. <ul><li>Direct support for Pretty Lights, in Telluride (2015)</li><li>Artist on the upcoming series “Mala in India”</li><li>Artist in residence at 1Beat, 2014</li><li>Performed at India's first Boiler Room (2016)</li><li>Producer for Red Bull's Searching for Sound (2016)</li><li>Artist at Ableton's LOOP in Berlin (2016)</li><li>Live on Gilles Peterson's Worldwide FM, Bombay pop up</li></ul>",
            fb: "https://facebook.com/sandunesmusic",
            insta: "https://instagram.com/sandunesmusic",
            twitter: "https://twitter.com/sandunesmusic",
            soundcloud: "https://soundcloud.com/sandunes",
            ra: "https://residentadvisor.net/dj/sandunes"
        },
        {
            id: 'sindhi-curry',
            name: 'Sindhi Curry',
            img: 'img/artists/sindhi-curry.jpg',
            bio: "Sindhi Curry aka Pramod Sippy started his musical journey at an impressionable age of 14. His foray into DJ’ing began with terrace parties and impromptu gatherings, usually organized by friends. A self-taught DJ, his intrigue led him to continually delve deeper into the artform, perpetually striving to understand it better. Over the course of a musical career spanning more than two decades, Pramod has held multiple residencies and performed across the country. During this journey, he has moved seamlessly from tapes to CDs, to consoles, to vinyl, of which he is a true practitioner with a growing collection. <br/><br/> Pramod has been an integral part of the entertainment industry, notably as a co-founder of The Bombay Elektrik Project and The Hive. His work was crucial in building the foundation for culture centers and movements in the country, providing platforms for upcoming talents to showcase their skills. <br/><br/> Sindhi Curry’s sound is a true testament to the diversity in music and its evolution through time. His style of music today is influenced by Chicago-House, Disco, Funk, Soul and Detroit Techno, amongst a vast array of genres. The atmosphere that he seeks to create can be best described as fresh, warm, and infused with funky grooves and cosmic sounds. <br/><br/> Till this day, one of the pillars of the foundation of his musicality has been his characteristic openness to all types of music. His knowledge and experience combined, is something that keeps him evolving as an artist, leaving the audience never knowing what to expect next!",
            fb: "https://facebook.com/authenticsindhicurry",
            soundcloud: "https://soundcloud.com/authenticsindhicurry"
        },
        {
            id: 'dotdat',
            name: 'dotdat',
            img: 'img/artists/dotdat.jpg',
            bio: "dotdat is a manifestation of the musical philosophy and inspirations that drive the man behind it. A culmination of ambiguous, dark and hypnotic sounds with hints of minimalism that make the mind and body move. <br/><br/>It is the point where the nuances of making music meet the joys of listening to it. Music, that is sure to be as eclectic as the name itself. <br/><br/>With techno at its core, he promises to carve his niche and deliver a unique and special experience that explores new dimensions of melody and movement.",
            fb: "https://facebook.com/dotdatofficial",
            insta: "https://instagram.com/dotdatofficial",
            soundcloud: "https://soundcloud.com/dotdatofficial"
        },
        {
            id: 'ape-echoes',
            name: 'Ape Echoes',
            img: 'img/artists/ape-echoes.jpg',
            bio: "Monkey See /(-_-)/ <br/> Monkey Do \(-_-)\ <br/> Monkey See \(-_-)/ <br/> Monkey Do /(-_-)\<br/>Monkey See \(-_-)\ <br/>Monkey Do \(-_-)/",
            fb: "https://facebook.com/apeechoes",
            insta: "https://instagram.com/ape_echoes",
            soundcloud: "https://soundcloud.com/apemachines"
        },
        {
            id: 'blurry-slur',
            name: 'Blurry Slur',
            img: 'img/artists/blurry-slur.jpg',
            bio: "Blurry Slur, is the electronica / deep-house moniker of Mumbai based DJ - Lynston Dsouza. He is probably one of the nicest human beings you can come across. A smile on his face and all about the vibe, he is born to live for music. He first got behind the decks at a young age of 16 and and over the past few years has evolved as one of Mumbai’s most sought after underground DJ’s.<br/><br/>Kickstarting his official techno project - QWIVER in 2013, it didn’t take long for him to establish himself as an artist in the underground electronic music scene. ",
            fb: "https://facebook.com/blurryslur",
            insta: "https://instagram.com/lynston_qwiver_blurryslur",
            soundcloud: "https://soundcloud.com/qwiver_blurryslur"
        },
        {
            id: 'likwid',
            name: 'Likwid',
            img: 'img/artists/likwid.jpg',
            bio: "Likwid is a multifaceted musician & media professional based out of Mumbai. He’s spent the better part of the last decade honing his DJ skills playing some of themost eclectic dance floors and festivals around India. <br/><br/>Currently in his mid 20’s and already a decade into the hustle of the music industry – Likwid has had the honor of supporting and playing along side some of the finest DJs/Live acts in the world such as Ame, Etapp Kyle, Rodriguez Jr, M.A.N.D.Y, & Petar Dundov to name a few. A true connoisseur of techno, acid and disco, Likwid can move seamlessly from dark, claustrophobic passages to soulful and euphoric moods within a set – sometimes between moments. It is this very nature of his sets, which has won him a loyal following among the scene punters and music enthusiasts alike. <br/><br/>Apart from his adventures behind the decks Likwid also runs his own brand of boutique festival – Future Theory, which builds on his philosophy of pushing the boundaries within the realm of House & Techno and everything in between. As the name of the festival suggests – Future Theory is one of the most cutting edge dance music event currently in the country and reflects the artistic vision of the man behind it.",
            fb: "https://facebook.com/likwidofficial",
            soundcloud: "https://soundcloud.com/likwidmusic"
        },
        {
            id: 'tarqeeb',
            name: 'Tarqeeb',
            img: 'img/artists/tarqeeb.jpg',
            bio: "Tarqeeb (Translation: Plan) is Ashish Jose. A seeker of hedonism through rhythm, philanthropy through music-making, he formed his moniker in the summer of 2012. The idea was always simple--promotion of quality EDM, minus the little labels and the big boxes. The only constants remain deep, groovy bass-lines, dark atmospheres and a trajectory that ultimately crescendos into high energy dance music. Coming from a Metal (bassist) and Psychedelic trance background, his sets innately include a generous dose of live sampling, layering and an overall vibe that could be defined as 'eclectic.' <br/><br/>His influences run deep. Think older heavyweights like Photek, LTJ Bukem, Ed Rush, BSE, Concord Dawn as well as producers like Alix Perez, Rockwell, Mefjus, Foreign Concept as a representation of the newer breed of the same.<br/><br/>If asked for a self-description, Tarqeeb tends to turn to one of his major musical inspirations, DnB producer Alix Perez's words of wisdom: \"I play generally deep but dip into various aspects of drum & bass. I like to read the crowd and let the music breathe. I find mixing in the right musical keys essential. I basically see it as a journey.\"<br/><br/>Still in its nascent stage, Tarqeeb has already given people a reason to move on dance floors around Asia. From Heavy Hongkong to NH7 Weekender Pune to Bass Camp Festival Delhi and Indian Surf Festival Orissa he's enjoyed playing alongside headliners like London Elektricity, Dub Phizix, Koan Sound, JAZZSteppa, Nanci & Phoebe as well as his peers from India's own burgeoning music scene such as BBC, Ox7gen, Sandunes, Reggae Rajahs, Vice Versa and BASS Foundation to name a few. <br/><br/>More recently,his project has also tied up with the Lightbenders from OLE India introducing interactive light visuals for his sets, which focus on creating a complete interactive audio-visual experience with the audience.",
            fb: "https://facebook.com/tarqeeb13",
            soundcloud: "https://soundcloud.com/tarqeeb"
        },
        {
            id: 'spryk',
            name: 'Spryk',
            img: 'img/artists/spryk.jpg',
            bio: "Spryk is the electronic music & art exploration of Mumbai based Tejas Nair. He presents a vast body of work that ranges from a unique brand of bass music releases to forays into the world of electronic art & installations. A signature blend of genres in his DJ sets have brought him to play alongside the likes of UK grime legend Swindle, Footwork don DJ EARL, Portuguese beat maker Holly & at some of the finest venues pushing Electronic Music in India.<br/><br/> In 2016 Spryk released his debut EP \"Slow Fast\" on the New York based Label, High Chai Recordings, a long time flag bearer for independent Indian Electronica across the globe. These sounds were subsequently supported by heavyweights Outlook & Dimensions Festivals in Croatia alongside others.<br/><br/> From designing the soundscape and contributing with musical score for India's first full length feature AAA Video Game title Antariksha Sanchar to putting out a mini video game along with his last release Meta, Spryk is constantly working towards pushing boundaries of his craft.<br/><br/> December of 2016 marked the debut of Spryk + Tessellate \"BEYOND | WITHIN\" A Virtual Reality Audio Visual experience that was showcased at Magnetic Fields Festival in Alsisar, Rajasthan marking the second AV installation that Spryk has showcased at the globally respected festival since its inception. Having been acclaimed and recognised for his work by the likes of Rolling Stone Magazine, Red Bull, Resident Advisor, Wild City, Gizmodo, etc.<br/><br/> 2017 is set to be a big year for this young producer. A much anticipated original AV show - STRANGE MOVEMENTS in collaboration with visual artist #thebigfatminimalist & a whole host of exciting collaborations are on the cards.",
            fb: "https://facebook.com/iamspryk",
            insta: "https://instagram.com/iamspryk",
            twitter: "https://twitter.com/iamspryk",
            soundcloud: "https://soundcloud.com/iamspryk"
        },
        {
        	id: 'deep-brown',
        	name: 'Deep Brown',
        	img: 'img/artists/deep-brown.jpg',
        	bio: "Deep Brown is the artistic expression of Ankur Kedia emerging from the sonar by-lanes of Kolkata. His career started in 2006 at the age of 16 by holding residencies at local clubs, which helped him sharpen his skills and set the stage for his audio experiments. Playing at the best clubs & festivals all throughout the subcontinent under his former collaborative project - Undefined Dimension, He gained an understanding of dancefloor attitudes, Thus began his foray into electronic music. The new project - Deep Brown - a mix bag of sounds & emotions, evolving from deep & funky grooves, laid back melodic progressions to the more intense beat driven sounds for the peak hours. He was one of the early adopters of digital DJing & has been very instrumental about the possibilities it has to offer. Playing 4 decks with live drum sequencing, his sets are based on the old-school vibe of pure flow, smooth mixes and an on the fly approach of remixing to keep things fresh and connected to the heart of the floor. Come 2013, He co-created the promotion agency Dusdozen to introduce the deeper shades of House/Techno to Calcutta city with over 100 gigs in its lifespan of 4 years.",
        	fb: "https://facebook.com/deepbrownmusic",
        	insta: "https://instagram.com/deepbrownmusic",
        	soundcloud: "https://soundcloud.com/deepbrownmusic"
        },
        {
            id: 'bhish',
            name: 'Bhish',
            img: 'img/artists/bhish.jpg',
            bio: "Owner of one of the premier underground music IP's Regenerate, Bhishma Sagar spent a lot of his time in the office studio learning the art of DJ'ing and mixing. He's been right in the heart of the underground and knows exactly whats the best in new sound to feed to the insatiably hungry Indian scene. From setting trends with his absolutely flawless mixes to booking the best names in the industry. The aim behind getting on the decks was to spread more good music amongst the bustling music scene in the city and to share with everyone what Regenerate truly stands for.",
            fb: "https://facebook.com/bhishofficial",
            insta: "https://instagram.com/bhish_regenerate",
            soundcloud: "https://soundcloud.com/bhishma-sagar"
        },
        {
            id: 'abhi-meer',
            name: 'Abhi Meer',
            img: 'img/artists/abhi-meer.jpg',
            bio: "As a touring DJ, radio host and music critic, 30-year-old Abhi Meer from the island city of Mumbai has his hands pretty full. A digger’s mentality and an analytical approach to the dance floor has afforded him the privilege of dee-jaying at club gigs, festivals and residencies at home and around the world. In recent months, he’s played New Delhi’s first Boiler Room as well as the Magnetic Fields Festival at the behest of Resident Advisor. A regular contributor at boxout.fm, he routinely presents radio shows exploring the underbelly of global electronic music. <br/><br/> When not behind the decks, Abhi Meer is a professional researcher of music technology and produces both instrumental and electronic music for his own pleasure using modular synthesizers and advanced electro-acoustics.",
            fb: "https://www.facebook.com/abhimeerofficial",
            soundcloud: "https://soundcloud.com/abhimeer"
        },
        {
            id: 'rishon-bondal',
            name: 'Rishon Bondal',
            img: 'img/artists/rishon-bondal.jpg',
            bio: "Rishon Bondal is part of the new breed of Indian dance music DJ/Producers. A distinct, curious hardworking personality and a flair for reckless abandon are what exemplify his music. His productions and his musical style are diverse. As are his influences, ranging from Depeche Mode & Frankie Knuckles to Floorplan and Daft Punk. His works often fall into the realms of Interstellar Electronica, Futuristic Disco and Groovy House music, while at the same time remaining solid dance music songs that will stand the test of time. <br/><br/>Rishon’s DJ and live sets have all the right elements you need on the dance floor. His sets are groovy, soulful and sexy.",
            fb: "https://www.facebook.com/rishonbondalofficial",
            soundcloud: "https://soundcloud.com/rishon-bondal"
        },
        {
            id: 'moon-roots-project',
            name: 'Moon Roots Project',
            img: 'img/artists/moon-roots-project.jpg',
            bio: "Moon Roots Project is a hunt by two siblings for their love of sound. Fatema & Hannan Hakim are constantly evolving their own sounds and re-working already produced tracks into their own fabric. Being strong headed siblings they have found a middle ground on the sound scape they would like to project.<br/><br/> Having started in late 2014, this duo has played at several clubs in Mumbai such as Boveda, The Daily, Bonobo, SOHO Tapas Bar, China 1, etc. Taking off at all the best clubs Pune has to offer Euriska, Blue Frog, High Spirits, Swig, The little Door, etc and had their debut in Goa in 2016 playing from Sundowners to Early morning sets at various clubs in a single night!<br/><br/>The Duo has releases on labels such as the infamous Under Noize from El Salvador and the brand-new Puff Recordings from India. Keep an eye out for them as they prepare to release on many more labels this coming year. They have closed venues after artists such as Pig & Dan as well as opened for big as well as upcoming techno sensations such as Matador, Konstantin (Giegling), Lee Foss, Rick Maia and Blot! <br/><br/> Having played 1am sets at festivals such as the Lost Party & EVC, this techno duo fuel their love for dark sound by playing during the night but also contrast their performances for different timings of the day. Their sounds range from Techno to Trance. However, they always have their own unique way to surprise a dance floor making sure that the crowd keeps looking forward to them performing.",
            fb: "https://www.facebook.com/moonrootsproject",
            soundcloud: "https://soundcloud.com/moonrootsproject"
        },
        {
            id: 'zapdos',
            name: 'Zapdos',
            img: 'img/artists/zapdos.jpg',
            bio: "Zapdos is the brainchild of a techno DJ/producer (Maulik Shah) and a multi-instrumentalist (Joy Gohil) who took modest home-studio jam sessions to local clubs in February 2017 and haven't looked back ever since. Their Live sets soon garnered loyal supporters and their unique camaraderie on stage merited slots alongside artists such as Âme, Rodriguez Jr. &amp; Sebastian Mullært. For the boys, it&#39;s just the end of a beginning as they put together some original material in the studio for an EP in early 2018.",
            fb: "https://facebook.com/wearezapdos",
            insta: "https://instagram.com/zapdoslive",
            soundcloud: "https://soundcloud.com/zapdoslive"
        },
        {
            id: 'ezzyland',
            name: 'Ezzyland',
            img: 'img/artists/ezzyland.jpg',
            bio: "Sidharth Ezhilan blends colorful storytelling under the name \"EZZYLAND\". The Dubai resident migrated to the motherland earlier this year on a mission: to raise the bar and change the game in the growing indie music scene so as to eventually make India one of the hottest music destinations in the world. He never refrains from left-field quintissential commentary on the current state of international music and it's consumption methods. He's been slowly carving a unique niche for an international audience by bringin original sounds from the future into place that are stuch in the past. He's proving influential to a generation of both homegrown and overseas artists by putting out bodies of work that are way ahead of it's time at an impressive speed. His live performance is as simple as it gets. He is a curator of alien music; a seamless radio station from the 31st century with no ads. His music is riddled with elements from alternative, ambient, triphop, trap, rock, j-pop, bass, jazz, lofi, r&b, new wave and a plethora of soundcloud subgenres. His tunes have made the rounds in Tunein Radio stations for many mornings. <br/><br/> To highlight a few notable venues, he has played at the Antisocial Mumbai, Social Bangalore and Antisocial Delhi apart from a couple of other small venues across the country. His other streams of revenue include selling beats to international artists, bandcamp sales, monetized streams, offering mixing/mastering services, designing artwork and ocassionally mentoring fellow musicians. <br/><br/> After overcoming months of personal struggles earlier this year, he released a very personal and his most mature concept album to date titled \"DEPS X ANXIES\". Wild City declared it an understated classic. He even opened up for the first time in a tell-all interview with The Orijinal",
            fb: "https://facebook.com/ezzylandmusicson",
            insta: "https://instagram.com/trap_machi",
            twitter: "https://twitter.com/ezzyland",
            soundcloud: "https://soundcloud.com/ezzyland"
        }
    ];
    
    const HomeComponent = {
        template: `
            <div class="home-container page-container">
                <div class="home-logo">
                    <img src="img/logo-unit.png"></img>
                </div>
                <div class="btn-container">
                    <a href="#">
                        <div class="btn alt-btn aftermovie-btn"><i class="fa fa-play-circle-o" aria-hidden="true"></i><span class="number">201</span>6 Aftermovie</div>
                    </a>
                </div>
                <div class="social-icons-mobile">
                    <a href="https://www.facebook.com/futuretheory2017/" target="_blank">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/futuretheory2017/" target="_blank">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/ftcitysessions" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
            </div>
        `,
        mounted() {
            document.querySelector(".aftermovie-btn").addEventListener("click", function(e){
                e.preventDefault();
                document.querySelector(".overlay-video").classList.add('open');
                document.querySelector(".nav-overlay").classList.add('open');
            });
            document.querySelector(".logo").classList.add('hide');
        }
     };
    

    
     const AboutComponent = {
        template: `
            <div class="about-container page-container">
                <div class="flex-row">
                    <div class="about-info">
                        <h3>Future Theory : City Sessions</h3>
                        <p>
                            Future Theory makes a return with our very first edition of the City Sessions - A two day exhibition featuring only the absolute finest electronic music artists from all across the globe along side some of the most superlative homegrown acts and emerging talents. <br/><br/>City Sessions aims to bring to fore the signature FTF recipe of whipping up a phenomenal aural experience to the hustle of a metropolitan city at a gorgeous and iconic beach side venue. <br/><br/>It will feature a series of showcases encompassing both day & night, right in the heart of Mumbai city @ Razzberry Rhinoceros which will take you off right from where we left off, last year. Pick up those sharpies and mark your calendars!
                        </p>
                    </div>
                    <div class="img-container">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/ikh7GqtHSWc?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `,
        mounted(){
            document.querySelector(".logo").classList.remove('hide');
        }
    };

    const VenueComponent = {
        template: `
            <div class="venue-container about-container page-container">
                <div class="venue-info">
                    <div class="venue-img-container flex-row">
                        <div class="venue-img-1"><img src="img/razz-1.jpg"></div>
                        <div class="venue-img-2"><img src="img/razz-2.jpg"></div>
                    </div>

                    <h3>Venue 1 : Pandora at <a class="venue-link" href="https://www.facebook.com/RazzberryRhinoceros/" target="_blank">Razzberry Rhinoceros</a></h3>
                    <p>
                            The foremost base of the portal, we begin outdoors on the gorgeous banks of the Arabian Sea at 2 PM and go on into the night until 10 PM. Post which the party moves indoors, going into the wee hours of the night!
                    </p>
                    <h3>Venue 2 : Source at <a class="venue-link" href="https://www.facebook.com/KharSocial/" target="_blank">#antiSOCIAL | Khar Social</a></h3>
                    <p>
                            Second stop in the second edition of the Source stage from last year, where we unveil some musically high octane afterparties at one of the premier sounding venues in town, reeling the time right back to the staging at Fort Jadhavgadh!
                    </p>
                    <h3>Venue 3 : Wild Card at <a class="venue-link" href="https://www.facebook.com/KittySuMumbai/" target="_blank">#TheList | Kitty Su Mumbai</a></h3>
                    <p>
                            The last stop is the after-after party featuring some exclusive and intimate b2bs and live jams among other surprise we have up our sleeves. One you ragers wouldn't wanna miss! This will go on until the morning after.
                    </p>
                </div>
            </div>
        `,
        mounted(){
            document.querySelector(".logo").classList.remove('hide');
        }
    };

    const FAQComponent = {
        template: `
            <div class="faq-container about-container page-container">
                <div class="faq-info">
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>What is the difference between the All Access Pass and The Festival Ticket?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            All Access Pass gives you:<br/>
                            - Access to Razzberry Rhinoceros on Saturday & Sunday <br/>
                            - Access to After Party at Razzberry Rhinoceros on Saturday & Sunday<br/>
                            - Access to After Party at antiSOCIAL on Saturday & Sunday <br/>
                            - Access to After Party at The List (Kitty Su small room) on Saturday and Sunday
                            <br/><br/>
                            Festival Ticket gives you:<br/>
                            - Access to Razzberry Rhinoceros on Saturday & Sunday<br/>
                            - Access to After Party at Razzberry Rhinoceros on Saturday & Sunday
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Can I buy a ticket at the venue?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            You can come to the venue and buy tickets but since it is a limited ticket event we suggest you buy yours in advance.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Will I get parking at the venue?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Yes, there is a pay and park right opposite the venue.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>What time does the event start?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            We will start by 3pm.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Will I get re-entry with my ticket?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Yes, re-entry is permitted.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Can I carry my own cigarettes?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Yes, you can carry your own cigarettes into the venue.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Can I buy a 1-day pass?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            No, You can only buy the 2-day pass.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>What is the line-up schedule?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            The line-up schedule will only be put up at Razzberry Rhinoceros. We suggest you come early to not miss out on your favourite acts. We start at 3pm sharp on both the days.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Will you be selling non-alcoholic beverages?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            We will be partnering with Roasted Today for Nitro Coffee & Cold brew coffee - and of course, there's always RedBull & sodas.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Will there be food at the event?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Yes we have a special menu curated for the event by Razzberry Rhinoceros' head chef.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Where is the entrance for the event from?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Please come in through the Juhu Hotel entrance as the box office will be situated there.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>How do i get to the venue?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            You can drive there, take a cab or a rickshaw. We suggest not driving, so you can have a drink or two!
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Are there any afterparties? if yes, where all?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            Yes there are 3 afterparties on each day.<br/><br/>
                            One is at Razzberry Rhinoceros which will run from 10pm - 01:30am<br/><br/>
                            One is at antiSOCIAL which will run from 10pm - 01:30am.<br/><br/>
                            One is at The List (Kitty Su) which starts at 01:30am & goes on till the wee hours of the morning.
                            </p>
                        </div>
                    </div>
                    <div class="faq">
                        <div class="faq-q" v-on:click="showAnswer">
                            <p>Can I attend the afterparties only?</p>
                            <div class="plus-icon">+</div>
                        </div>
                        <div class="faq-a">
                            <p>
                            You can attend the afterparty @ antiSOCIAL if you like to on 18th & 19th November. There's an entry of Rs 500/- payable at the door.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        methods: {
            showAnswer: function (e) {
                const el = e.srcElement.parentNode.lastChild;
                const icon = e.srcElement.lastChild;
                console.log(e);
                if (el.classList.contains('show')) {
                    el.classList.remove('show');
                    icon.classList.remove('show');
                } else {
                    el.classList.add('show');
                    icon.classList.add('show');
                }
            }
        },
        mounted(){
            document.querySelector(".logo").classList.remove('hide');
            
        }
    };

    const ArtistsComponent = {
        template: `
            <div class="artists-container page-container">
                
                <div class="grid-container">
                    
                    <div class="grid-item" v-for="artist in artists">
                        <router-link class="grid-link" :to="{ name: 'artist', params: { id: artist.id }}">
                            <div class="grid-item-inner js-tilt" :style="{ backgroundImage: 'url(' + artist.img + ')' }" data-tilt>
                                <div class="grid-item-artist-name">{{ artist.name }}</div>
                            </div>
                            <div class="artist-name-small">
                                <p>{{ artist.name }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
                
            </div>
        `,
        data: function() {
            return {
                artists: artistsArray
            }
        },
        mounted() {
            const element = document.querySelectorAll(".js-tilt");
            VanillaTilt.init(element, {
                glare: true,
                "max-glare": 0.5,
                max: 30,
                scale: 1.2
            });
            document.querySelector(".logo").classList.remove('hide');
        }
    };

    const ArtistComponent = {
        template: `
            <div class="artist-container page-container">
                <div class="flex-row flex-start">
                    <div class="img-container artist-img">
                        <img :src="artist.img" />
                    </div>
                    <div class="artist-info">
                        <h3>
                            {{ artist.name }}
                            <div class="artist-icons">
                                <a :href="artist.fb" target="_blank" v-if="artist.fb"><i class="fa fa-facebook"></i></a>
                                <a :href="artist.insta" target="_blank" v-if="artist.insta"><i class="fa fa-instagram"></i></a>
                                <a :href="artist.soundcloud" target="_blank" v-if="artist.soundcloud"><i class="fa fa-soundcloud"></i></a>
                                <a :href="artist.twitter" target="_blank" v-if="artist.twitter"><i class="fa fa-twitter"></i></a>
                            </div>
                        </h3>
                        <p class="bio"></p>
                    </div>
                </div>
            </div>
        `,
        computed: {
            artist: function() {
                const id = this.$route.params.id;
                return artistsArray.filter(function(obj){return obj.id == id;})[0];
            }
        },
        mounted() {
            setTimeout(function(){
                window.scrollTo(0,0);
            }, 600);

            const element = document.querySelectorAll(".img-container");
            VanillaTilt.init(element, {
                glare: true,
                "max-glare": 0.5,
                max: 30,
            });

            document.querySelector(".bio").innerHTML = this.artist.bio;
            document.querySelector(".logo").classList.remove('hide');
        }
    };
    
    const routes = [
        { path: '/', component: HomeComponent },
        { path: '/about', component: AboutComponent },
        { path: '/artists', component: ArtistsComponent },
        { path: '/artists/:id', name:'artist', component: ArtistComponent },
        { path: '/venue', component: VenueComponent },
        { path: '/faq', component: FAQComponent }
    ];
    
    const router = new VueRouter({
        routes: routes
    });
    
    const app = new Vue({
        el: "#app",
        router: router,
        methods: {
            closeNav: function() {
                document.querySelector('nav').classList.remove('open');
                document.querySelector('.nav-overlay').classList.remove('open');
            }
        }
    });
    
    /*****************************
    Countdown Clock
    ******************************/

    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
        };
    }
    function initializeClock(id, endtime){
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total<=0){
          clearInterval(timeinterval);
        }
        }

        updateClock();
        var timeinterval = setInterval(updateClock,1000);
    }
    var deadline = 'November 18 2017 00:16:00 UTC+0530';
    initializeClock('clock', deadline);

});	