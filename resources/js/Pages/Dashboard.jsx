import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function Dashboard({ auth }) {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <Button color="primary">
                            Button
                        </Button>
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                        <Button onPress={onOpen}>Open Modal</Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                            <p>
                                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                            </p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Action
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
