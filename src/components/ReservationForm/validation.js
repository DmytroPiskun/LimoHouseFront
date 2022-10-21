import * as yup from 'yup';

const schema = yup.object().shape({
    vehicle: yup.object().shape({
        title: yup.string().required(),
        price: yup.number().required(),
        thumb: yup.string().required(),
        passengers: yup.number().required(),
    }),
    numberOfHours: yup.number().positive("hours must be positive number").integer("hours must be a numbers").required("you must specify how many hours you need"),
    weightOfPet: yup.number().moreThan(-1, "weight of your pet must be positive").integer("weight of your pet must be a number"),
});

export default schema