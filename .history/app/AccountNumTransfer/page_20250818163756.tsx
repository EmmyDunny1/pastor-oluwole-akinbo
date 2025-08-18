import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GiftAccountCard() {
  return (
    <Card className="max-w-md mx-auto mt-10 rounded-2xl shadow-lg border border-yellow-200 bg-white">
      <CardHeader className="text-center border-b pb-4">
        <CardTitle className="text-2xl font-semibold text-yellow-700">
          🎁 Direct Gift Support
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Appreciation Note */}
        <p className="text-center text-gray-600 text-base leading-relaxed">
          Thank you for your kindness and generosity in celebrating{" "}
          <span className="font-semibold text-yellow-700">Pastor Oluwole Akinbo</span>.
          Your gift means so much!
        </p>

        {/* Bank Details */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Details</h3>
          <p className="text-gray-800 font-medium">
            Bank: <span className="text-yellow-700">Access Bank</span>
          </p>
          <p className="text-gray-800 font-medium">
            Account Name: <span className="text-yellow-700">Oluwole Akinbo</span>
          </p>
          <p className="text-gray-800 font-medium">
            Account Number:{" "}
            <span className="text-yellow-700 tracking-wider">1234567890</span>
          </p>
        </div>

        {/* Closing Appreciation */}
        <p className="text-center text-sm text-gray-500 italic">
          Every seed sown is deeply appreciated. May you be richly blessed.
        </p>
      </CardContent>
    </Card>
  );
}
