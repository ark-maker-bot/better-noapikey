const axios = require('axios').default;
async function get_dog(){
  const url = `https://no-api-key.com/api/v1/animals/dog`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_cat(){
  const url = `https://no-api-key.com/api/v1/animals/cat`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_bear(){
  const url = `https://no-api-key.com/api/v1/animals/bear`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_panda(){
  const url = `https://no-api-key.com/api/v1/animals/panda`, res = await axios({url: url, method: 'get'});
  return res.data;
}
function get_delete(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/delete?image=${image}`;
  if(!img)return null;
  return img;
}
function get_snowflake(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/snow?image=${image}`;
  if(!img)return null;
  return img;
}
function get_simpcard(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/simpcard?image=${image}`;
  if(!img)return null;
  return img;
}
function get_blueify(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/blueify?image=${image}`;
  if(!img)return null;
  return img;
}
function get_blueify(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/blueify?image=${image}`;
  if(!img)return null;
  return img;
}
function get_recaptcha(text){
  if(!text)return null;
  const img = `https://api.no-api-key.com/api/v2/recaptcha?text=${text}`;
  if(!img)return null;
  return img;
}
function get_crap(stepped, stepper){
  if(!stepped || !stepper)return null;
  const img = `https://api.no-api-key.com/api/v2/crap?stepped=${stepped}?stepper=${stepper}`;
  if(!img)return null;
  return img;
}
function get_invert(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/invert?image=${image}`;
  if(!img)return null;
  return img;
}
function get_darken(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/darken?image=${image}`;
  if(!img)return null;
  return img;
}
function get_purplify(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/purplify?image=${image}`;
  if(!img)return null;
  return img;
}
function get_shoot(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/shoot?image=${image}`;
  if(!img)return null;
  return img;
}
function get_smart(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/smrt?image=${image}`;
  if(!img)return null;
  return img;
}
function get_timeout(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/timeout?image=${image}`;
  if(!img)return null;
  return img;
}
function get_trash(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/trash?image=${image}`;
  if(!img)return null;
  return img;
}
function get_tweet(text){
  if(!text)return null;
  const img = `https://api.no-api-key.com/api/v2/trump?message=${text}`;
  if(!img)return null;
  return img;
}
function get_rip(image){
  if(!image)return null;
  const img = `https://api.no-api-key.com/api/v2/rip?image=${image}`;
  if(!img)return null;
  return img;
}
async function get_captcha(){
  const url = `https://api.no-api-key.com/api/v2/captcha`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_memes(){
  const url = `https://api.no-api-key.com/api/v1/memes`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_8ball(){
  const url = `https://no-api-key.com/api/v1/magic8ball`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_hug(){
  const url = `https://no-api-key.com/api/v1/hug`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_kiss(){
  const url = `https://no-api-key.com/api/v1/kiss`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_quote(){
  const url = `https://no-api-key.com/api/v1/quotes`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_lyrics(song_name){
  const url = `https://no-api-key.com/api/v1/ksof/lyrics?song=${song_name}`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_riddle(){
  const url = `https://no-api-key.com/api/v1/riddle`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_fact(){
  const url = `https://no-api-key.com/api/v1/facts`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_flip_text(text){
  const url = `https://no-api-key.com/api/v1/flip-text?text=${text}`, res = await axios({url: url, method: 'get'});
  return res.data.message;
}
async function get_password(length){
  const url = `https://no-api-key.com/api/v1/password?length=${length}`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_car(){
  const url = `https://no-api-key.com/api/v1/car`, res = await axios({url: url, method: 'get'});
  return res.data;
}
async function get_binary(text){
  const url = `https://no-api-key.com/api/v1/binary?text=${text}`, res = await axios({url: url, method: 'get'});
  return res.data.binary;
}
async function get_text(binary){
  const url = `https://no-api-key.com/api/v1/binary-text?binary=${text}`, res = await axios({url: url, method: 'get'});
  return res.data.text;
}
async function get_coin_flip(){
  const url = `https://no-api-key.com/api/v1/coin-flip`, res = await axios({url: url, method: 'get'});
  return res.data;
}
function get_welcome_card(username, user_image, text_heading){
  if(!username || !user_image || !text_heading)return null;
  const img = `https://api.no-api-key.com/api/v2/welcome?username=${username}&user_image=${user_image}&text_heading=${text_heading}`;
  if(!img)return null;
  return img;
}
function get_leave_card(username, user_image, text_heading){
  if(!username || !user_image || !text_heading)return null;
  const img = `https://api.no-api-key.com/api/v2/goodbye?username=${username}&user_image=${user_image}&text_heading=${text_heading}`;
  if(!img)return null;
  return img;
}
function get_kicked(kicker, kicked){
  if(!kicker || !kicked)return null;
  const img = `https://api.no-api-key.com/api/v2/kick?kicker=${kicker}&kicked=${kicked}`;
  if(!img)return null;
  return img;
}
function get_punched(puncher, punched){
  if(!puncher || !punched)return null;
  const img = `https://api.no-api-key.com/api/v2/punch?punch=${puncher}&punched=${punched}`;
  if(!img)return null;
  return img;
}
module.exports = {
  get_welcome_card,
  get_leave_card,
  get_kicked,
  get_punched,
  get_dog,
  get_cat,
  get_bear,
  get_panda,
  get_delete,
  get_8ball,
  get_binary,
  get_blueify,
  get_captcha,
  get_car,
  get_coin_flip,
  get_crap,
  get_darken,
  get_fact,
  get_flip_text,
  get_hug,
  get_invert,
  get_kiss,
  get_lyrics,
  get_memes,
  get_panda,
  get_password,
  get_purplify,
  get_quote,
  get_recaptcha,
  get_riddle,
  get_rip,
  get_shoot,
  get_simpcard,
  get_smart,
  get_snowflake,
  get_text,
  get_timeout,
  get_trash,
  get_tweet
}