"use client";
import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { BarLoader } from "react-spinners";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { useCourses } from "@/hooks/useCourses";

export default function Courses() {
  const { courses, isLoading, error } = useCourses();

  return (
    <div className="flex justify-center lg:px-8 md:px-6 px-4">
      <div className="w-full max-w-[1280px] py-16">
        {isLoading && (
          <div className="flex justify-center items-center h-[100px]">
            <BarLoader />
          </div>
        )}
        {courses?.length && (
          <Accordion variant="shadow">
            {courses.map((course) => (
              <AccordionItem
                key={course.id}
                startContent={<SiCoursera />}
                indicator={<IoIosArrowBack />}
                title={course.title}
              >
                {course.description}
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
