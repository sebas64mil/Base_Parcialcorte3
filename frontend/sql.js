// Players - Set Data
document.getElementById("SetPlayerButton").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const minutesPlayed = document.getElementById("minutesPlayed").value;
    const numberOfPasses = document.getElementById("numberOfPasses").value;
    const shotAccuracy = document.getElementById("shotAcurracy").value;
    const missedGoals = document.getElementById("missedGoals").value;
    const cards = document.getElementById("cards").value;

    if (!name || !minutesPlayed || !numberOfPasses || !shotAccuracy || !missedGoals || !cards) {
        alert("All player fields are required.");
        return;
    }

    const data = {
        name,
        minutesPlayed,
        numberOfPasses,
        shotAccuracy,
        missedGoals,
        cards
    };

    fetch("http://localhost:3000/example/sqlPlayers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.ok ? response.text() : Promise.reject("Registration failed."))
        .then(message => {
            alert(message);
            document.getElementById("name").value = "";
            document.getElementById("minutesPlayed").value = "";
            document.getElementById("numberOfPasses").value = "";
            document.getElementById("shotAcurracy").value = "";
            document.getElementById("missedGoals").value = "";
            document.getElementById("cards").value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering player.");
        });
});

// Teams - Set Team
document.getElementById("SetTeamButton").addEventListener("click", () => {
    const nameTeam = document.getElementById("nameTeam").value;
    const squad = document.getElementById("squad").value;
    const positionTable = document.getElementById("positionTable").value;
    const coach = document.getElementById("coach").value;

    if (!nameTeam || !squad || !positionTable || !coach) {
        alert("All team fields are required.");
        return;
    }

    const data = {
        nameTeam,
        squad,
        positionTable,
        coach
    };

    fetch("http://localhost:3000/example/sqlTeams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.ok ? response.text() : Promise.reject("Team registration failed."))
        .then(message => {
            alert(message);
            document.getElementById("nameTeam").value = "";
            document.getElementById("squad").value = "";
            document.getElementById("positionTable").value = "";
            document.getElementById("coach").value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering team.");
        });
});

// Matches - Set Match
document.getElementById("SetMatchButton").addEventListener("click", () => {
    const NameTeam1 = document.getElementById("NameTeam1").value;
    const NameTeam2 = document.getElementById("NameTeam2").value;
    const location = document.getElementById("location").value;
    const result = document.getElementById("result").value;
    const numberOfSpectators = document.getElementById("numberOfSpectators").value;

    if (!NameTeam1 || !NameTeam2 || !location || !result || !numberOfSpectators) {
        alert("All match fields are required.");
        return;
    }

    const data = {
        NameTeam1,
        NameTeam2,
        location,
        result,
        numberOfSpectators
    };

    fetch("http://localhost:3000/example/sqlMatches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.ok ? response.text() : Promise.reject("Match registration failed."))
        .then(message => {
            alert(message);
            document.getElementById("NameTeam1").value = "";
            document.getElementById("NameTeam2").value = "";
            document.getElementById("location").value = "";
            document.getElementById("result").value = "";
            document.getElementById("numberOfSpectators").value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering match.");
        });
});