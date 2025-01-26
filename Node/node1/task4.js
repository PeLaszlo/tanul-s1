if(process.argv[2])
{
    let summa=0;
    const text=process.argv[2];
    if (isNaN(text)) console.log("Ez nem szám");
    else
    {
    for (let i=0; i<text.length;i++)
    {
        summa+=Number(text[i]);
    }
    console.log("számjegyek összege: "+summa);
    }
}
else console.log("Nincs paraméter");
