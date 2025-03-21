import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ICard1Props {
  imageUrl: string;
  title: string;
  link: string;
  description?: string;
}

const Card1: FC<ICard1Props> = ({ imageUrl, title, description, link }) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src={imageUrl}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={link}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Card1;
