/*!
 *  jQuery Spam Guard v2.0.1
 *  https://github.com/madeinhamburg/jquery-spamguard
 */
!function(c){c.fn.spamguard=function(e){var t={protect:"email",sethref:!0,content:!1,noindex:!0},n=c.extend({},t,e),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ!'§$=?`´€~[]|*#-_.,;:@+/";return this.each(function(){var e=c(this).html(),t=null;for($decoded="",i=0;i<e.length;i++)$prevChar=e[i-1],$thisChar=e[i],-1!==c.inArray($thisChar,o.split(""))?"\\"===$prevChar&&($decoded+=$thisChar):"\\"!==$thisChar&&($decoded+=$thisChar);e=$decoded,"telephone"!==n.protect&&"tel"!==n.protect&&"tele"!==n.protect||(t="tel:"+(e=e.replace(/[^0-9 \+\/\(\)\-\.]+/g,"")).replace(/[^0-9\+]+/g,"")),"email"!==n.protect&&"mail"!==n.protect||(t="mailto:"+e),c(this).is("a")&&!0===n.sethref&&null!==t&&c(this).attr("href",t),!1!==n.content?(!0===n.noindex&&(n.content="\x3c!--noindex--\x3e\x3c!--googleoff: all--\x3e"+n.content+"\x3c!--googleon: all--\x3e\x3c!--/noindex--\x3e"),c(this).html(n.content)):(!0===n.noindex&&(e="\x3c!--noindex--\x3e\x3c!--googleoff: all--\x3e"+e+"\x3c!--googleon: all--\x3e\x3c!--/noindex--\x3e"),c(this).html(e))})},c.spamguardEncode=function(e,t){for(var n=c.extend({},{},t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ!'§$=?`´€~[]|*#-_.,;:@+/",r="",a=0;a<e.length;a++){for(var i=e[a],l=0;l<o.length;l++)i=i.replace(o[l],"\\"+o[l]);r+=i,r+=c.spamguardRandomString(o)}return r},c.spamguardRandomNum=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},c.spamguardRandomString=function(e){for(var t="",n=0;n<c.spamguardRandomNum(0,3);n++){var o=c.spamguardRandomNum(0,e.length);t+=e.charAt(o,o+1)}return t}}(jQuery);