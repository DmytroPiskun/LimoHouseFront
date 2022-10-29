import * as yup from 'yup';

export const vehicleSchema = yup.object().shape({
    vehicle: yup.object().shape({
        title: yup.string().required(),
        price: yup.number().required(),
        thumb: yup.string().required(),
        passengers: yup.number().required(),
    }),
    numberOfHours: yup.number().positive("hours must be positive number").integer("hours must be a numbers").required("you must specify how many hours you need"),
    weightOfPet: yup.number().moreThan(-1, "weight of your pet must be positive").integer("weight of your pet must be a number"),
});

export const tripInfoSchema = yup.object().shape({
    pickUpLocation: yup.string().required("please specify a pick up location"),
    pickUpAddress: yup.string().required("please let us know an adress of your pick up"),
    pickUpDate: yup.string().required("this field is required"),
    destinationLocation: yup.string().required("please specify a destination location"),
    destinationAddress: yup.string().required("please let us know an adress of your destination"),
    pickUpTime: yup.string().required("this field is required"),
    passengers: yup.number().positive().required("this number cant be negative"),
    luggage: yup.number().moreThan(-1, 'this value cannot be negative').required("this number cant be negative"),
})
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const customerInfoSchema = yup.object().shape({
    firstName: yup.string().required("this field is required"),
    lastName: yup.string().required("this field is required"),
    email: yup.string().email("this must be a valid email").required("this field is required"),
    phone: yup.string().matches(phoneRegExp, 'phone number is not valid').required("this field is required"),
})

export const paymentSchema = yup.object().shape({
    creditCard: yup.string().required("this field is required"),
    // nameOnCard: yup.string().required("this field is required"),
    nameOnCard: yup.string().when("creditCard", {
        is: 'Cash',
        then: yup.string(),
        else: yup.string().required('this field is required')
    }),
    expYear: yup.number().when("creditCard", {
        is: 'Cash',
        then: yup.number(),
        else: yup.number().required("this field is required")
    }),
    expMonth: yup.string().when('creditCard', {
        is: "Cash",
        then: yup.string(),
        else: yup.string().required("this field is required")
    }),
    cardNumber: yup.string().when('creditCard', {
        is: "Cash",
        then: yup.string(),
        else: yup.string().matches(/^\d+$/, "this field must have digits only").required("this field is required"),
    }),
    cv2Code: yup.string().when('creditCard', {
        is: "Cash",
        then: yup.string(),
        else: yup.string("this field must be number").min(3, "invalid code").required("this field is required")
    })
})