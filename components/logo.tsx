import { IconProps, Image } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Image
      {...props}
      src="https://teadrop.dlad.io/static/media/dlad-logo.f9ce3de6b4766c862ba4.png"
      alt="Open Source"
      fit="cover"
      w="full"
      h={{ base: 6, md: 6 }}
      loading="lazy"
      opacity={0.9}
    />
  );
};
