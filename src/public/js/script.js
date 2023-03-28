function addPoll() {
    const pollName = document.getElementById("new-poll_input").value;
    console.log("addPoll", pollName);

    usePost("/polls", {name: pollName}, "Please enter a name for your poll.");
}

function addVote(id){
    const voterName = document.getElementById("voter-name_input").value;
    const voteOption = document.getElementById("option_select").value;

    console.log("addVote", id, voterName, voteOption);
    usePost(`/polls/${id}`, {voterName, voteOption}, "Please enter a name!")
}

function usePost(url, body, alertMessage){
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((response) => {
        console.log("response", response);
        if (response.status === 200) {
            window.location.reload()
        } else {
            alert(alertMessage)
        }
    })
}