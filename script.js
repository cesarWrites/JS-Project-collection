const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("I am sad"));
            }
        }, 2000);
        }) ;
    };
    //is kayo not sick

    onMyBirthday(false) 
    .then ((result) => {
        console.log('I have ${result} cakes');
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() =>  {
     console.log("Party");
    })

    //if kayo sick
    onMyBirthday(true)
    .then((result) => {
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Party");
    });
