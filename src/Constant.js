//authorization token and url
export const constantFile = {
    BASE_URL : "https://gorest.co.in/public/v2/users",
    TOKEN : "032c91f0b1744e89f2f312238d52c581c0553d923d86e8272ec2999967525691"
}
//pages
export const commonFilePages = {
    userReview : "User Review",
    addUser : 'Add User',
}

//components

export const commonFileComponents = {
    modelPopup : {
        name : 'Name:',
        email : 'Email:',
        gender : 'Gender:',
        status: 'Status:',
        close : 'Close',
        save : 'Save'
    },
    optionGender : [
        {male : 'Male'},
       { female : 'Female'},
        {other : 'Other'},
    ],
    optionStatus : [
        {active : 'Active'},
       { inActive : 'InActive'},
        
    ],
    sideBar : {
        favorite : 'Favorite',
        filter : 'Filter'
    },
    table : {
        noRecordFound : 'No records found.'
    },
    userForm : {
        column : [
            {heading : 'Edit' , type : 'icon' , iconType : 'solar:pen-2-bold-duotone' , btnType : 'edit'},
            {heading : 'Name' , value : 'name' },
            {heading : 'Email' , value : 'email'},
            {heading : 'Gender' , value : 'gender'},
            {heading: 'Status', value: 'status', type: 'dropdown', options: ['Active','Inactive'] },
            {heading : 'Delete' , type : 'icon' , iconType : 'material-symbols:delete-outline' , btnType : 'delete'},
    
        ]
    }
}
 
