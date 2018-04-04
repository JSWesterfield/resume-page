// global context (this = window)
console.log(this.document === document); // true //Context
var obj = {
    foo: function(){
        //alert(this === obj);
    }
};
obj.foo(); // true
//Scope
var name = 'Todd';
var scope1 = function () {
  // name is available here
  var scope2 = function () {
    // name is available here too
    var scope3 = function () {
      // name is also available here!
    };
  };
};
// name = undefined
var scope1 = function () {
  // name = undefined
  var scope2 = function () {
    // name = undefined
    var scope3 = function () {
      var name = 'Todd'; // locally scoped
    };
  };
};


//Add CommentCollapse 
// Message Input

// Message #generals