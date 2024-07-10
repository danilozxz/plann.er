import { Plus, CircleCheck } from "lucide-react"

interface ActivitiesProps {
    openCreateActivityModal: () => void
}

export const Activities = ({ openCreateActivityModal }: ActivitiesProps) => {
    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Atividades</h2>
                <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                    <Plus className='size-5' />
                    Cadastrar atividades
                </button>
            </div>

            <div className="space-y-8">
                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-zinc-300 text-xl font-semibold">Dia 19</span>
                        <span className="text-zinc-500 text-xs">Sábado</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                </div>

                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-zinc-300 text-xl font-semibold">Dia 20</span>
                        <span className="text-zinc-500 text-xs">Domingo</span>
                    </div>
                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Academia em grupo</span>
                            </div>
                            <span className="text-zinc-400 text-sm">08:00h</span>
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Academia em grupo</span>
                            </div>
                            <span className="text-zinc-400 text-sm">08:00h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}