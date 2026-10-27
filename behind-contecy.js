document.addEventListener("DOMContentLoaded", function() {
    
    let form = document.getElementById("form");

    function validateForm(event) {
        event.preventDefault();

        let name = document.querySelector('input[name="name"]').value;
        
        let email = document.getElementById("email").value;
        let confirm_email = document.getElementById("confirm-email").value;
        
        let phone = document.querySelector('input[name="phone-number"]').value;
        let date_input = document.getElementById("birthday").value;
        
        let question = document.querySelector('textarea[name="txtAr"]').value;
        
        let checkboxes = document.querySelectorAll('input[name="cbx"]:checked');
        let contact_methods = [];
        checkboxes.forEach((checkbox) => {
            contact_methods.push(checkbox.parentNode.textContent.trim());
        });

        if (!name) {
            alert("Please enter your name.");
            return;
        }
        
        if (!/^[A-Za-z\s]+$/.test(name)) {
            alert("Error: Name must contain letters only.");
            return; 
        }

        if (!email) {
            alert("Error: Please enter you email.");
            return; 
        }

        if (!confirm_email) {
            alert("Error: Please enter you email to confirm it is the same.");
            return; 
        }        

        if (email !== confirm_email) {
            alert("Error: The emails do not match.");
            return;
        }

        if (!phone) {
            alert("Error: Please enter your telephone number.");
            return;
        }

        if (phone === "" || !/^\d+$/.test(phone)) {
             alert("Error: Phone number must contain numbers only.");
             return;
        }
        
        if (!date_input) {
            alert("Error: Please select a date for the project.");
            return;
        }

        let selected_date = new Date(date_input);
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        selected_date.setHours(0, 0, 0, 0);

        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (selected_date < tomorrow) {
            alert("Error: You must had to enter a date that is in the future.");
            return; 
        }

        if (checkboxes.length === 0) {
            alert("Error: Please select at least one contact method.");
            return; 
        }

        let defaultText = "About a project"; 

        let aston_email = "000000000@university.ac.uk";
        
        let summary = "Please confirm your details:\n\n";
        summary += "TO: " + aston_email + "\n";
        summary += "\n";
        summary += "Name: " + name + "\n";
        summary += "Email: " + email + "\n";
        summary += "Phone: " + phone + "\n";
        summary += "Contact Method: " + contact_methods.join(", ") + "\n";
        summary += "Date: " + date_input + "\n";
        summary += "Question: " + question + "\n\n";
        summary += "Click OK to submit.";

        if (confirm(summary)) {
            alert("Your question has been submitted.");
            form.reset();
        }
    }

    form.addEventListener("submit", validateForm);
});