var people = [{
 name: 'Саша',
 age: 15
},{
 name: 'Артем',
 age: 27
},{
 name: 'Андрей',
 age: 18
}, {
 name: 'Ира',
 age: 15
},{
 name: 'Алексей',
 age: 27
},{
 name: 'Андрей',
 age: 18
}
];

var countPeople = people.length;
var table = document.createElement('table');
document.write('<div className="info-table"><table className="table">');
for (var i = 0; i < countPeople; i++) {
  var name = people[i].name;
  var age = people[i].age;
  var amount = 0;
    var av=0;
    
    for (var j=0; j < countPeople; j++) {
        if (people[i].name==people[j].name) {
        amount+=1;
        }
        av+=people[j].age;
    }  
    
    
    av=av/countPeople;
    

  document.write('<tr className="mess-hide"><td className="name"><h4>' + name + '</h4></td><td className="age"><h4>' + age + '</h4></td><td className="amount"><h4>' + amount + '</h4></td></tr>');
}

document.write('</table></div>');

document.write(av);