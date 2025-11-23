import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function FeatureCard({ icon: Icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-start" data-aos="fade-up">
        <div className="mb-4 grid h-16 w-16 place-content-center rounded-lg bg-main p-2.5 text-left text-white">
          {/* Icon is a React component passed via the `icon` prop */}
          <Icon className="h-8 w-10" />
        </div>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
