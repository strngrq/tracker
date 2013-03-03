
Tickets = new Meteor.Collection("tickets");

if (Meteor.isClient) {
  Template.tickets_list.tickets = function () {

    return Tickets.find({}, {sort: {text: 1}}); 
  };

  Template.tickets_list.events({
    'click .row' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
