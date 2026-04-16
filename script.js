
    // NBA DATA 
    const playersRaw = [
        { name: "Joel Embiid", team: "Philadelphia 76ers (PHI)", points: 33, rebounds: 10.8, assists: 5.7 },
        { name: "Jalen Brunson", team: "New York Knicks (NYK)", points: 32.4, rebounds: 3.3, assists: 7.5 },
        { name: "Shai Gilgeous-Alexander", team: "Oklahoma City Thunder (OKC)", points: 30.2, rebounds: 7.2, assists: 6.4 },
        { name: "Tyrese Maxey", team: "Philadelphia 76ers (PHI)", points: 29.8, rebounds: 5.2, assists: 6.8 },
        { name: "Donovan Mitchell", team: "Cleveland Cavaliers (CAVS)", points: 29.6, rebounds: 5.4, assists: 4.7 },
        { name: "Luka Dončić", team: "Dallas Mavericks (DAL)", points: 28.9, rebounds: 9.5, assists: 8.1 },
        { name: "Nikola Jokić", team: "Denver Nuggets (DEN)", points: 28.7, rebounds: 13.4, assists: 8.7 },
        { name: "Anthony Davis", team: "Los Angeles Lakers (LAL)", points: 27.8, rebounds: 15.6, assists: 4 },
        { name: "LeBron James", team: "Los Angeles Lakers (LAL)", points: 27.8, rebounds: 6.8, assists: 8.8 },
        { name: "Anthony Edwards", team: "Minnesota Timberwolves (MIN)", points: 27.6, rebounds: 7, assists: 6.5 },
        { name: "Devin Booker", team: "Phoenix Suns (PHX)", points: 27.5, rebounds: 3.3, assists: 6 },
        { name: "Paolo Banchero", team: "Orlando Magic (ORL)", points: 27, rebounds: 8.6, assists: 4 },
        { name: "Kevin Durant", team: "Phoenix Suns (PHX)", points: 26.8, rebounds: 6.5, assists: 3.3 },
        { name: "Jayson Tatum", team: "Boston Celtics (BOS)", points: 25, rebounds: 9.7, assists: 6.3 },
        { name: "Khris Middleton", team: "Milwaukee Bucks (MIL)", points: 24.7, rebounds: 9.2, assists: 4.7 },
        { name: "Jaylen Brown", team: "Boston Celtics (BOS)", points: 23.9, rebounds: 5.9, assists: 3.3 },
        { name: "Bam Adebayo", team: "Miami Heat (MIA)", points: 22.6, rebounds: 9.4, assists: 3.8 },
        { name: "Kyrie Irving", team: "Dallas Mavericks (DAL)", points: 22.1, rebounds: 3.7, assists: 5.1 },
        { name: "Pascal Siakam", team: "Indiana Pacers (IND)", points: 21.6, rebounds: 7.5, assists: 3.8 },
        { name: "James Harden", team: "Los Angeles Clippers (LAC)", points: 21.2, rebounds: 4.5, assists: 8 },
        { name: "Jamal Murray", team: "Denver Nuggets (DEN)", points: 20.6, rebounds: 4.3, assists: 5.6 },
        { name: "Paul George", team: "Los Angeles Clippers (LAC)", points: 19.5, rebounds: 6.8, assists: 4.8 },
        { name: "Karl-Anthony Towns", team: "Minnesota Timberwolves (MIN)", points: 19.1, rebounds: 9, assists: 2.6 },
        { name: "Franz Wagner", team: "Orlando Magic (ORL)", points: 18.9, rebounds: 6.9, assists: 4.4 },
        { name: "Jalen Williams", team: "Oklahoma City Thunder (OKC)", points: 18.7, rebounds: 6.8, assists: 5.4 },
        { name: "Tyrese Haliburton", team: "Indiana Pacers (IND)", points: 18.7, rebounds: 4.8, assists: 8.2 },
        { name: "Donte DiVincenzo", team: "New York Knicks (NYK)", points: 17.8, rebounds: 4, assists: 2.6 },
        { name: "CJ McCollum", team: "New Orleans Pelicans (NOP)", points: 17.8, rebounds: 4.8, assists: 4.8 },
        { name: "Brook Lopez", team: "Milwaukee Bucks (MIL)", points: 17.7, rebounds: 4.3, assists: 1.8 },
        { name: "Myles Turner", team: "Indiana Pacers (IND)", points: 17, rebounds: 6.6, assists: 2.1 },
        { name: "Austin Reaves", team: "Los Angeles Lakers (LAL)", points: 16.8, rebounds: 3.8, assists: 3.6 },
        { name: "Tyler Herro", team: "Miami Heat (MIA)", points: 16.8, rebounds: 3.6, assists: 5.4 },
        { name: "Derrick White", team: "Boston Celtics (BOS)", points: 16.7, rebounds: 4.3, assists: 4.1 },
        { name: "Bobby Portis", team: "Milwaukee Bucks (MIL)", points: 16.5, rebounds: 11.3, assists: 1 },
        { name: "Bradley Beal", team: "Phoenix Suns (PHX)", points: 16.5, rebounds: 2.8, assists: 4.5 },
        { name: "Ivica Zubac", team: "Los Angeles Clippers (LAC)", points: 16.2, rebounds: 9.3, assists: 1 },
        { name: "Evan Mobley", team: "Cleveland Cavaliers (CAVS)", points: 16, rebounds: 9.3, assists: 2.3 },
        { name: "Michael Porter Jr.", team: "Denver Nuggets (DEN)", points: 15.8, rebounds: 6.8, assists: 1.1 },
        { name: "Darius Garland", team: "Cleveland Cavaliers (CAVS)", points: 15.7, rebounds: 3.6, assists: 5.8 },
        { name: "Chet Holmgren", team: "Oklahoma City Thunder (OKC)", points: 15.6, rebounds: 7.2, assists: 2.1 },
        { name: "Andrew Nembhard", team: "Indiana Pacers (IND)", points: 14.9, rebounds: 3.3, assists: 5.5 },
        { name: "Jalen Suggs", team: "Orlando Magic (ORL)", points: 14.7, rebounds: 5.1, assists: 3.3 },
        { name: "Josh Hart", team: "New York Knicks (NYK)", points: 14.5, rebounds: 11.5, assists: 4.5 },
        { name: "Jonas Valančiūnas", team: "New Orleans Pelicans (NOP)", points: 14.5, rebounds: 11, assists: 1.3 },
        { name: "Aaron Gordon", team: "Denver Nuggets (DEN)", points: 14.3, rebounds: 7.3, assists: 4.4 },
        { name: "Brandon Ingram", team: "New Orleans Pelicans (NOP)", points: 14.3, rebounds: 4.5, assists: 3.3 },
        { name: "D'Angelo Russell", team: "Los Angeles Lakers (LAL)", points: 14.2, rebounds: 2.8, assists: 4.2 },
        { name: "Kelly Oubre Jr.", team: "Philadelphia 76ers (PHI)", points: 13.2, rebounds: 4, assists: 1.7 },
        { name: "Jrue Holiday", team: "Boston Celtics (BOS)", points: 13.2, rebounds: 6.1, assists: 4.4 }
    ];

    // Helper: extract team short code 
    function getTeamCode(fullTeamStr) {
        const match = fullTeamStr.match(/\(([A-Z]+)\)/);
        return match ? match[1] : fullTeamStr.slice(0, 3).toUpperCase();
    }

    // Build enhanced player objects with clean team code
    const players = playersRaw.map(p => ({
        name: p.name,
        fullTeam: p.team,
        teamCode: getTeamCode(p.team),
        points: p.points,
        rebounds: p.rebounds,
        assists: p.assists
    }));

    //  DOM elements 
    const tbody = document.getElementById("tableBody");
    const searchField = document.getElementById("searchInput");
    const teamDropdown = document.getElementById("teamFilter");
    const countSpan = document.getElementById("playerCount");
    const darkToggleBtn = document.getElementById("darkModeToggle");

    // state 
    let searchTerm = "";
    let selectedTeam = "all";
    let sortKey = "points";      
    let sortDirection = "desc"; 

    //  team filter 
    function buildTeamOptions() {
        const teamsSet = new Set();
        players.forEach(p => teamsSet.add(p.teamCode));
        const sortedTeams = Array.from(teamsSet).sort();
        teamDropdown.innerHTML = '<option value="all">All Teams</option>';
        sortedTeams.forEach(team => {
            const option = document.createElement("option");
            option.value = team;
            option.textContent = team;
            teamDropdown.appendChild(option);
        });
    }

    //filter 
    function getFilteredPlayers() {
        return players.filter(player => {
           
            if (selectedTeam !== "all" && player.teamCode !== selectedTeam) return false;
         
            if (searchTerm.trim() !== "") {
                return player.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
            }
            return true;
        });
    }

    //sorting 
    function sortPlayers(playersArray, key, dir) {
        const sorted = [...playersArray];
        sorted.sort((a, b) => {
            let valA, valB;
            if (key === "name") {
                valA = a.name.toLowerCase();
                valB = b.name.toLowerCase();
            } else if (key === "team") {
                valA = a.teamCode;
                valB = b.teamCode;
            } else {
                valA = a[key];
                valB = b[key];
            }
            if (valA < valB) return dir === "asc" ? -1 : 1;
            if (valA > valB) return dir === "asc" ? 1 : -1;
            return 0;
        });
        return sorted;
    }

    // render table 
    function render() {
        let filtered = getFilteredPlayers();
        const sortedPlayers = sortPlayers(filtered, sortKey, sortDirection);
        
      
        countSpan.textContent = `${sortedPlayers.length} player${sortedPlayers.length !== 1 ? 's' : ''}`;
        
        if (sortedPlayers.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem;">✖ No players match</td></tr>`;
            return;
        }
        
        const fragment = document.createDocumentFragment();
        sortedPlayers.forEach(player => {
            const row = document.createElement("tr");
           
            // Name
            const tdName = document.createElement("td");
            tdName.textContent = player.name;
            tdName.style.fontWeight = "500";
            
            // Team (badge style)
            const tdTeam = document.createElement("td");
            const badge = document.createElement("span");
            badge.className = "team-badge";
            badge.textContent = player.teamCode;
            tdTeam.appendChild(badge);
            
            // Points
            const tdPts = document.createElement("td");
            tdPts.textContent = player.points;
            // Rebounds
            const tdReb = document.createElement("td");
            tdReb.textContent = player.rebounds;
            // Assists
            const tdAst = document.createElement("td");
            tdAst.textContent = player.assists;
            
            row.appendChild(tdName);
            row.appendChild(tdTeam);
            row.appendChild(tdPts);
            row.appendChild(tdReb);
            row.appendChild(tdAst);
            fragment.appendChild(row);
        });
        
        tbody.innerHTML = "";
        tbody.appendChild(fragment);
        
        // update sorting indicators on <th>
        document.querySelectorAll("th[data-sort]").forEach(th => {
            const col = th.getAttribute("data-sort");
            th.classList.remove("sort-asc", "sort-desc");
            if (col === sortKey) {
                th.classList.add(sortDirection === "asc" ? "sort-asc" : "sort-desc");
            }
        });
    }

    //  refresh  dashboard 
    function refresh() {
        render();
    }
    
    // event handlers
    function onSearchInput(e) {
        searchTerm = e.target.value;
        refresh();
    }
    
    function onTeamChange(e) {
        selectedTeam = e.target.value;
        refresh();
    }
    
    function onHeaderClick(e) {
        const th = e.target.closest("th[data-sort]");
        if (!th) return;
        const clickedKey = th.getAttribute("data-sort");
        if (sortKey === clickedKey) {
            
            sortDirection = sortDirection === "asc" ? "desc" : "asc";
        } else {
            sortKey = clickedKey;
          
            if (clickedKey === "name" || clickedKey === "team") {
                sortDirection = "asc";
            } else {
                sortDirection = "desc";
            }
        }
        refresh();
    }
    
    //  Dark mode 
    function initDarkMode() {
        const saved = localStorage.getItem("nba_simple_dark");
        if (saved === "true") {
            document.body.classList.add("dark-mode");
            darkToggleBtn.textContent = " Light Mode";
        } else {
            document.body.classList.remove("dark-mode");
            darkToggleBtn.textContent = " Dark Mode";
        }
        darkToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("nba_simple_dark", isDark);
            darkToggleBtn.textContent = isDark ? " Light Mode" : "Dark Mode";
        });
    }
    
    //  attach event listeners 
    function bindEvents() {
        searchField.addEventListener("input", onSearchInput);
        teamDropdown.addEventListener("change", onTeamChange);
        const thead = document.querySelector("#statsTable thead");
        thead.addEventListener("click", onHeaderClick);
    }
    
    //  initializ
    function init() {
        buildTeamOptions();
        bindEvents();
        initDarkMode();
      
        sortKey = "points";
        sortDirection = "desc";
        refresh();
    }
    
    init();