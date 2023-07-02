// 代码块语言识别

$(function () {
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');
  var pre = $('pre'); 

  pre.before($highlight_lang);
  pre.each(function () {
    var code_language = $(this).attr('class');

    if (!code_language) {
      return true;
    };
    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

    // 首字母大写
    // lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    
    $(this).siblings(".code_lang").text(lang_name);
    
    /*
    var code_language = "";
    var children = this.children;
    for(var i=0; i<children.length; i++) {
        var cc = children[i]; 
        if(typeof(cc)=="object") { 
          var lang = cc.className; 
          this.children[i].className = "language-" + lang; 
          if(!code_language.length) { 
            code_language = lang; 
          }
        }
    }
    
    if (code_language.length) {
      $(this).siblings(".code_lang").text(code_language);
    }
    this.className = "language-"; 
    */
  });
});
