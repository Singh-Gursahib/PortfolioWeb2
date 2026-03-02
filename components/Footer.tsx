'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <div className="wrap">
                <div className="foot">
                    <span>
                        © <span id="footYear">{year}</span> Gursahib Singh. All rights
                        reserved.
                    </span>
                    <span>Built with intention ◆ Kamloops, BC</span>
                </div>
            </div>
        </footer>
    );
}
