import { useState } from "react"
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantsLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export const TripDetailsPage = () => {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    const openCreateActivityModal = () => {
        setIsCreateActivityModalOpen(true);
    }
    const closeCreateActivityModal = () => {
        setIsCreateActivityModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationAndDateHeader />

            <main className="flex gap-16 px-6">
                <Activities openCreateActivityModal={openCreateActivityModal} />

                <div className="w-80 space-y-6">
                    <ImportantsLinks />
                    <div className='w-full h-px bg-zinc-800' />
                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}
        </div>
    )
}