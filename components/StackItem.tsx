import { StackItem as StackItemType } from '@/lib/types';

interface StackItemProps {
    item: StackItemType;
}

export default function StackItem({ item }: StackItemProps) {
    return (
        <div className="stack-item">
            <div className="si-name">{item.name}</div>
            <div className="si-role">{item.role}</div>
        </div>
    );
}
