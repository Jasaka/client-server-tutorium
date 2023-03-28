function addPoll() {
    const pollName = document.getElementById("new-poll_input").value;
    console.log("addPoll", pollName);

    fetch("/polls", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: pollName})
    }).then((response) => {
        console.log("response", response);
        if (response.status === 200) {
            window.location.reload()
        } else {
            alert("Please enter a name for your poll.")
        }
    })
}