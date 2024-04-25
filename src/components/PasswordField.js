// React imports
import { useState } from "react";

// Chakra imports
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";

// Formik imports
import { Field, ErrorMessage } from "formik";

// Assets Import
import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

export default function Default(props) {
  const { id, label, fieldName, extra, placeholder, form=false, mb, ...rest } = props;
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";

  // State variables
  const [show, setShow] = useState(false);

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
        <InputGroup size='md'>
            <Field
            {...rest}
            as={Input}
            type={show ? "text" : "password"}
            id={id}
            name={fieldName}
            fontWeight='500'
            placeholder={placeholder}
            _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
            />
            <InputRightElement display='flex' alignItems='center' mt='4px'>
              <Icon
                color={textColorSecondary}
                _hover={{ cursor: "pointer" }}
                as={show ? MdRemoveRedEye : RiEyeCloseLine}
                onClick={() => setShow(!show)}
              />
            </InputRightElement>
        </InputGroup>
      ) : (
        <InputGroup size='md'>
            <Input
            {...rest}
            type={show ? "text" : "password"}
            id={id}
            name={fieldName}
            fontWeight='500'
            placeholder={placeholder}
            _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
            />
            <InputRightElement display='flex' alignItems='center' mt='4px'>
              <Icon
                color={textColorSecondary}
                _hover={{ cursor: "pointer" }}
                as={show ? MdRemoveRedEye : RiEyeCloseLine}
                onClick={() => setShow(!show)}
              />
            </InputRightElement>
        </InputGroup>
      )}
      {form && fieldName && <Text fontSize='sm' fontWeight='400' color='red'><ErrorMessage name={fieldName} /></Text>}
    </FormControl>
  );
}
