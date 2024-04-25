// Chakra imports
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// Formik imports
import { Field, ErrorMessage } from "formik";

export default function Default(props) {
  const { id, label, fieldName, extra, placeholder, type, form=false, mb, ...rest } = props;
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <FormControl direction='column' mb={mb ? mb : "20px"}>
      <FormLabel
        display='flex'
        htmlFor={id}
        fontSize='sm'
        fontWeight='500'
        color={textColor}
        mb='8px'
        _hover={{ cursor: "pointer" }}>
        {label}
        <Text fontSize='sm' fontWeight='400' ms='2px' color={textColor ? textColor : 'red'}>
          {extra}
        </Text>
      </FormLabel>
      {form ? (
        <Field
          {...rest}
          as={Input}
          type={type}
          id={id}
          name={fieldName}
          fontWeight='500'
          placeholder={placeholder}
          _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
        />
      ) : (
        <Input
          {...rest}
          type={type}
          id={id}
          name={fieldName}
          fontWeight='500'
          placeholder={placeholder}
          _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
        />
      )}
      {form && fieldName && <Text fontSize='sm' fontWeight='400' color='red'><ErrorMessage name={fieldName} /></Text>}
    </FormControl>
  );
}
