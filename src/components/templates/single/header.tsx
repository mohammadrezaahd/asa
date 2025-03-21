import { Avatar, Typography } from "@material-tailwind/react";
import { FC } from "react";

interface ISingleHeaderProps {
  title: string;
}

const SingleHeader: FC<ISingleHeaderProps> = ({ title }) => {
  return (
    <div>
      <div className="heading flex flex-col gap-5">
        <div>
          <h3>{title}</h3>
          <hr className="bg-blue-gray-200 w-1/2 h-0.5" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://lh3.googleusercontent.com/a/ACg8ocLM2dEty9PK-KabrvKgsZ3k8aU6SzhmAzlRNabFXInPhjVXThI=s96-c"
              alt="avatar"
              size="sm"
            />
            <div>
              <Typography variant="h6">Mohammadreza Ahadiyan</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
