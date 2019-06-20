            var glagol, objekat, likovi;
            glagol = ["sadim", "pečem", "berem", "čistim", "plevim", "kuvam", "farbam", "perem", "gledam", "kupim", "natočim", "sipam", "iseckam", "čitam", "pevam", "kujem", "štemujem", "avanzujem", "liferujem", "slušam", "štimungujem", "naštimam", "cepam", "jedem", "usisam", "premazem", "namazem", "peglam", "krečim", "bacim", "oplevim", "hejtujem", "bušim", "operem", "ribam", "skinem", "zapakujem", "spustim", "zakačim", "pomazim", "naštelujem", "evidentiram", "šarmiram", "ziherujem", "kibicujem", "isfeniram", "brifingujem", "adaptiram", "aktiviram", "degustiram", "gepekujem", "dizajniram", "švercujem", "prodam", "gletujem"];
            objekat = ["repu", "travu", "cigle", "sudove", "ogradu", "kelerabu", "televizor", "auto", "cveće", "kera", "drva", "ajvar", "amortizer", "kuplung", "čakšire", "duvan", "bubreg", "emigrante", "farmu", "kantar", "vaser vagu", "krompir", "kravu", "pidzamu", "lampu", "knjigu", "ulje", "krov", "mistriju", "noge", "dupe", "uši", ""];
            likovi = ["mamom i tatom", "mamom", "tatom", "babom", "Dart Vejderom", "Aleksandrom Vucicem", "Perom", "Djokom", "Mitom", "kolegom"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * glagol.length);
              var rand2 = Math.floor(Math.random() * objekat.length);
              var rand3 = Math.floor(Math.random() * likovi.length);
              //                var randCol = [rand1,rand2,rand3];
              //                var i = randGen();
              var content = "Ne mogu moram da " + glagol[rand1] + " " + objekat[rand2] + " sa " + likovi[rand3] + ".";

              document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();