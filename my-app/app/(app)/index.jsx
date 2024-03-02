import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <>
            <Text>MAIN APP PAGE</Text>
            <Text style={{ color: 'red' }}>HCP Links</Text>

            <Link href="hcp-questionnaire" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Family Meeting Questionnaires</Text>
                </Pressable>
            </Link>

            <Link href="hcp-recordings" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Family Meeting Recorder</Text>
                </Pressable>
            </Link>

            <Link href="hcp-meditations" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Guided Meditations</Text>
                </Pressable>
            </Link>

            <Link href="hcp-consultation" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Consult Spiritual Health</Text>
                </Pressable>
            </Link>

            <Link href="hcp-resources" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Resources for Professionals</Text>
                </Pressable>
            </Link>


            {/* Patient Links */}
            <Text style={{ color: 'red' }}>Patient Links</Text>

            <Link href="pat-questionnaire" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Pre-Family Meeting Questionnaire</Text>
                </Pressable>
            </Link>

            <Link href="pat-recordings" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Previous Family Meeting Recordings</Text>
                </Pressable>
            </Link>

            <Link href="pat-meditations" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Guided Meditations</Text>
                </Pressable>
            </Link>

            <Link href="pat-resources" asChild>
                <Pressable>
                    <Text style={{ color: 'blue' }}>Resources for Practical Matters</Text>
                </Pressable>
            </Link>

        </>
    );
}