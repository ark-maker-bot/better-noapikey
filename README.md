# Better-noapikey
 This is a shortcut for people that want to use no-api-key website for things. This is unofficial, I created this so everyone that can't use it or use web-scrapers.

## Sample code
```
const r = require('better-noapikey');
r.get_dog().then(res => {
  console.log(res);
})
```
## List of functions:
```
get_welcome_card(username, user_image, text_heading),
get_leave_card(username, user_image, text_heading),
get_kicked(kicker, kicked),
get_punched(puncher, punched),
get_dog(),
get_cat(),
get_bear(),
get_panda(),
get_delete(image),
get_8ball(),
get_binary(text),
get_blueify(image),
get_captcha(),
get_car(),
get_coin_flip(),
get_crap(stepped, stepper),
get_darken(image),
get_fact(),
get_flip_text(text),
get_hug(),
get_invert(image),
get_kiss(),
get_lyrics(song_name),
get_memes(),
get_password(limit),
get_purplify(image),
get_quote(),
get_recaptcha(text),
get_riddle(),
get_rip(image),
get_shoot(image),
get_simpcard(image),
get_smart(image),
get_snowflake(image),
get_text(binary),
get_timeout(image),
get_trash(image),
get_tweet(text)
```
