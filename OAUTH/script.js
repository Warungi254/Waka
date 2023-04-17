function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params  = {
        "client_id":"235035968062-uj5t4imdmgp610pdg7aa4tjclqspadin.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5501/OAUTH/profile.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'pass-through-value'
        }

        for (var p in params){
            let input = document.createElement('input')
            input.setAttribute('type','hidden')
            input.setAttribute('name',p)
            input.setAttribute('value',params[p])
            form.appendChild(input)
        }
        document.body.appendChild(form)
        form.submit()
    }
         /*   // Get the user's ID token and basic profile information
            var id_token = googleUser.getAuthResponse().id_token;
            var profile = googleUser.getBasicProfile();
            
            // Send the ID token and profile information to your server-side authentication endpoint
            // for further validation and processing
            
            // Example AJAX code for sending the data to the server
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.olabet.co.mz/login');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                console.log('Server response:', xhr.responseText);
            };
            xhr.send('id_token=' + id_token + '&email=' + encodeURIComponent(profile.getEmail()));*/
        
    