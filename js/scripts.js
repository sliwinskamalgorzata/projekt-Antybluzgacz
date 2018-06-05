
(function(){

  function TrollKiller(field, restrictedWords){

     this._field= field;
     this._words= restrictedWords.split(/, */);
     this._regex= new RegExp("(" + this._words.join("|")+ ")", "igm");

     this._assignEvents();



  }


  TrollKiller.prototype._assignEvents= function(){

   this._field.addEventListener("keyup", this._filterMessage.bind(this), false);

 };

  TrollKiller.prototype._filterMessage= function(e){

    this._field.value= this._field.value.replace(this._regex, "hehe")





  };



var tk= new TrollKiller(
  document.querySelector("[name='your-message']"),
  "kurka wodna, orzesz Ty, psia kosc, kurde"
);

})();
