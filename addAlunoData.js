// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    db.collection('cafes').add({
        nome: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});