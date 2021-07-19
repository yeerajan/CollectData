const scriptURL = 'https://script.google.com/macros/s/AKfycbx8YJEB5tK2MWbNOdy__j0U_fHgRl9RgfCn8wr3j9kiy8Lvm9IQ66YEcUaIDusFg_S5/exec'
            const form = document.forms['Submit-googlesheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you ! We will get back to you soon..."))
                .catch(error => console.error('Error!', error.message))
            })