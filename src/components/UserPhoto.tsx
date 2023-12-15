import { IImageProps, Image } from "native-base";

type ImageProps = IImageProps & {
  size: number;
};

export function UserPhoto({ size, ...rest }: ImageProps) {
  return (
    <Image
      {...rest}
      alt="Profile picture"
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
    />
  );
}
