


//pages
export const commonFilePages = {
    userReview : "User Review",
    addUser : 'Add User',
}
export const welcomePage = {
    welcomeback : "Welcome Back",
    Login : "Login"
}
export const inputFeilds = [
     { name : 'email', type : 'email' , placeholder : 'Email' , id : 'email-id' , labelName : 'Name' },
     { name : 'password', type : 'password' , placeholder : 'Password' , id : 'password-id' , labelName : 'Password' },
     

]

//components

export const commonFileComponents = {
    modelPopup : {
        name : 'Name:',
        email : 'Email:',
        gender : 'Gender:',
        status: 'Status:',
        close : 'Close',
        save : 'Save',
        addUser : 'Add User',
        selectGender : 'Select Gender',
        selectStatus : 'Select Status'
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
        filter : 'Filter',
        reset : 'Reset'
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
            {heading: 'Status', value: 'status',  },
            {heading : 'Delete' , type : 'icon' , iconType : 'material-symbols:delete-outline' , btnType : 'delete'},
    
        ]
    }
}
 
