# punctuator-api

**For Limited use / prototyping only**

**POST** `https://punctuator-tqbwdivave.now.sh` 
`{ text: "One person wrote Sinaloa is not nearly as hostile and life-threatening as often portrayed by the US media" }`

#### Returns:
```
{success: true, message: "One person wrote Sinaloa is not nearly as hostile and life-threatening as often portrayed by the US media. "}
```

#### Example: 
```
$.post('https://punctuator-tqbwdivave.now.sh/', {text: 'One person wrote Sinaloa is not nearly as hostile and life-threatening as often portrayed by the US media'}, function (data) {
  if (data.success) console.log(data.message);
});
```

