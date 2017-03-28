
var obj ={
'rainking contact id':'rainKingContactId',
'salutation':'salutation',
'first name':'firstName',
'last name':'lastName',
'nickname':'nickname',
'etouch sl':'etouchSl',
'title':'title',
'management level':'managementLevel',
'email':'email',
'address 1':'address1',
'address 2':'address2',
'city':'city',
'state/province':'state',
'zip/postal code':'zip',
'country':'country',
'phone':'phone',
'extension':'extension',
'supervisor':'supervisor',
'fax':'fax',
'has gatekeeper':'hasGatekeeper',
'executive':'executive',
'rainking company id':'rainKingCompanyId',
'company':'company',
'website':'website',
'sector':'sector',
'industry':'industry',
'duns':'duns',
'all employees':'allEmployees',
'it employees':'itEmployees',
'managers':'managers',
'revenue($b)':'revenue',
'it budget ($m)':'itBudget',
'fiscal year end':'fiscalYearEnd',
'rank: generic it services':'rank',
'last updated date':'lastUpdatedDate',
'notes':'notes',
'tags':'tags',
'status':'status',
'linkedin url':'linkedInUrl',
'twitter url':'twitterUrl'
};

module.exports ={
    createDBObjFromExcel: function(inputJSON){
        var newObj={};
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            newObj[val] = inputJSON[key];
        });
        return newObj;
    }
};