// pages/tracker.js
import dynamic from 'next/dynamic';

// Dynamically import the Tracker component with ssr: false
const Tracker = dynamic(() => import('../components/Tracker'), { ssr: false });

const TrackerPage = () => {
    return (
        <div>
            <Tracker />
        </div>
    );
};

export default TrackerPage;
